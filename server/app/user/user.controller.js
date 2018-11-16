import User from './user.model';
import Token from './token.model';
import Channel from '../channel/channel.model';
import extend from 'lodash/extend';
import errorHandler from '../../helpers/dbErrorHandler';
import config from '../../config/config';
import formidable from 'formidable';
import {sendSuccess,sendError} from '../../helpers/responseHandler';
import path from 'path';
import request from 'request';
import {uploadFileFromPathToCloudinary} from '../../helpers/cloudinaryManager';
import {createJwtToken,verifyToken} from '../../helpers/tokenHelper';
import {emailService} from '../../seneca';

const create = async (req, res, next) => {
  const user = new User(req.body);
  const twoDays = 1000*60*60*48;
  const inTwoDays = new Date(Date.now()+twoDays);
  try{
      const tokenString = createJwtToken('confirm_email',{_id:user._id},'48h');
      const token = new Token({value:tokenString,expireAt:inTwoDays});  
      await token.save();
      const newUser = await user.save();
      emailService.act({
        area:'email',action:'send',
        type:'confirm_user',
        to:newUser.email,name:newUser.firstName,
        link:`http://localhost:8080/api/users/verify/${tokenString}`},
      (err,res)=>{
       console.log(res);
      })
     delete newUser.hashed_password;
     delete newUser.salt;
     sendSuccess(res,'User registered')({user:newUser});
  }catch(err){
    sendError(res)(err);
  }
}


const list = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(users)
  }).select('name email updated created')
}

const userByID = (req, res, next, id) => {
  User.findById(id)
    .populate('following', '_id name photo')
    .populate('followers', '_id name photo')
    .exec((err, user) => {
    if (err || !user) return res.status('400').json({
      error: "User not found"
    })
    req.profile = user
    next()
  })
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const update = async (req, res, next) => {
      let user = req.user;
     try{
        user = extend(user, req.body,{updated:Date.now()});
        const files = req.files;
        if(files && files.photo){
          const pathToPhoto = files.photo.path;
          const previousPath = user.photo;
          const result = await uploadFileFromPathToCloudinary(pathToPhoto,'photo','image',previousPath);
          user.photo = result.secure_url;
          const updatedProfile  = await user.save();
          sendSuccess(res,'Profile updated')({user:updatedProfile});
         }
     }catch(err){
        sendError(res)(err);
     }
}

const verify = async (req,res)=>{
  const tokenString = req.params.token;
  try{
     const token = await Token.findOne({value:tokenString});
     res.writeHead(200, { "Content-Type": "text/html" });
     if(token){
       const verifyTokenAndFindUserTask = (async()=>{
          const result = await verifyToken(token.value,'confirm_email');
          const userId = result._id;
          const user = await User.findById(userId);
          if(user.verified){
            throw new Error(`Email ${user.email} has already been verified`);
          }
          return user;
      })(); 
        const verifyUserTask = (async()=>{
          const user = await verifyTokenAndFindUserTask;
          user.verified = true;
          const newUser = await user.save();
          token.remove();
          return newUser;
          })();
        const {firstName,email} = await verifyUserTask;
         res.end(`<h3 style="text-align:center; color:rgba(0,0,0,.6)">
          Thank you, ${firstName}. Email ${email} has been verified successfully
          </h3>`);      
     }else{
       res.end(`<h3 style="text-align:center;color:rgba(0,0,0,.6)">
        Token has expired
        </h3>`);
     } 
  }catch(err){
      res.end(`<h3 style="text-align:center; color:rgba(0,0,0,.6)">
        ${err.message}
        </h3>`);
  }
}




const addToHistory = async (req,res,next)=>{
  let user = req.user;
  let mediaId = req.params.mediaId;
  if(!user){
    next();
  } else{
     try {
    if(!user.history){
      user.history = [];
    }
    if(typeof user.saveHistory === 'undefined'){
      user.saveHistory = true;
    }
    if(user.saveHistory){
      let history = user.history;
      let found = history.findIndex(item=>item.id===mediaId);
      if(!~found){
        history.unshift({id:mediaId});
        await user.save();
      }
    }
    next();
  }catch(err){
    next();
  }
  }
}

const clearHistory = async (req,res,next) =>{
  const user = req.user;
  user.history = [];
  try{
    const updatedUser = await user.save();
    sendSuccess(res,'History cleared')({user:updatedUser});
  }catch(err){
    sendError(res)(err);
  }
}

const listUserChannels = async (req,res) => {
  const userId = req.params.userId;
  try {
    const channels = await Channel.find({owner:userId});
    sendSuccess(res,`Channels for user ${userId}`)({channels});
  }catch(err){
    sendError(res)(err);
  }
}

const remove = (req, res, next) => {
  let user = req.profile
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    deletedUser.hashed_password = undefined
    deletedUser.salt = undefined
    res.json(deletedUser)
  })
}

//following

const addFollowing = (req, res, next) => {
  User.findByIdAndUpdate(req.body.userId,
    {$push: {following: req.body.followId}}, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    next()
  })
}

const addFollower = (req, res) => {
  User.findByIdAndUpdate(req.body.followId,
   {$push: {followers: req.body.userId}}, {new: true})
  .populate('following', '_id name')
  .populate('followers', '_id name')
  .exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    result.hashed_password = undefined
    result.salt = undefined
    res.json(result)
  })
}

const removeFollowing = (req, res, next) => {
  User.findByIdAndUpdate(req.body.userId,
    {$pull: {following: req.body.unfollowId}}, (err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    next()
  })
}
const removeFollower = (req, res) => {
  User.findByIdAndUpdate(req.body.unfollowId, 
    {$pull: {followers: req.body.userId}}, {new: true})
  .populate('following', '_id name')
  .populate('followers', '_id name')
  .exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    result.hashed_password = undefined
    result.salt = undefined
    res.json(result)
  })
}

const addWatchlater = async(req,res)=>{
  let user = req.user;
  const mediaId = req.body.mediaId;
  if(!user){
    
  } else{
     try {
    if(!user.watchlater){
      user.watchlater = [];
    }
      let message = 'You have already added this media to watchlist';
      let watchlater = user.watchlater;
      let found = watchlater.findIndex(item=>item.id===mediaId);
      if(~found){
        message = 'Successfully added to watchlist';
        watchlater.unshift({id:mediaId});
        user = await user.save();
      }
    
    sendSuccess(res,message)({user});
  }catch(err){
    sendError(res)(err);
  }
  }
}

const addToContinueWatching = async (req,res)=>{
  const user = req.user;
  const mediaId = req.params.mediaId;
  const fromTime = req.body.fromTime || 0;
  
  if(!user.continueWatching){
    user.continueWatching = [];
  }
  let continueWatching = user.continueWatching;
  try{
    let index,newUser;
    const found = continueWatching.find((item,idx) => {
      if(item.mediaId === mediaId){
        index = idx;
        return true;
      }
      return false;
    });
    if(!found){
      continueWatching.unshift({mediaId,fromTime});
      newUser = await user.save();
    }else{
      const newElement = continueWatching[index];
      newElement.fromTime = fromTime;
      continueWatching.set(index,newElement);
      newUser = await user.save();
    }  
    sendSuccess(res)({user:newUser});
  }catch(err){
    sendError(res)(err);
  }
}

const removeFromContinueWatching = async(req,res)=>{
   const user = req.user;
   const mediaId = req.params.mediaId;
}


export default {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  removeFollower,removeFollowing,
  addFollower,addFollowing,
  addWatchlater,
  addToHistory,clearHistory,
  listUserChannels,
  verify,
  addToContinueWatching,
  removeFromContinueWatching
}