import User from './user.model';
import _ from 'lodash';
import errorHandler from '../../helpers/dbErrorHandler';
import config from './../../config/config';
// import profileImage from './../../src/assets/profile-pic.png';
import Cloudinary from 'cloudinary';
import formidable from 'formidable';
import path from 'path';
import request from 'request';

const create = (req, res, next) => {
  const user = new User(req.body)
  user.save((err, newUser) => {
    if (err) {
      return res.status(400).json({status:400,data:null,
        message: errorHandler.getErrorMessage(err)
      })
    }
    delete newUser.hashed_password;
    delete newUser.salt;
    res.status(200).json({status:200,data:newUser});
  })
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

const update = (req, res, next) => {
 
 let form = new formidable.IncomingForm();
  form.keepExtensions = true;
   form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: 'Cant upload photo'
      })
    }
     let user = req.profile;
     console.log(fields);
  user = _.extend(user, fields);
  user.updated = Date.now();
    if(files.photo){
     var pathToPhoto = files.photo.path;
     Cloudinary.v2.uploader.upload(pathToPhoto,config.cloudinary,function(err,result){
      if(result){
        user.photo = result.secure_url;
        saveUser(user,res);
      }
     })    
    }else{
       saveUser(user,res);
    }
       
      
  })

}



function saveUser(user,res){
           user.save((err) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    user.hashed_password = undefined
    user.salt = undefined
    res.status(200).json(user);
  })
}


const addToHistory = async (req,res,next)=>{
  let user = req.user;
  let mediaId = req.params.mediaId;
  console.log(user,mediaId);
  if(!user){
    next();
  } else{
     try {
    if(!user.history){
      user.history = [];
    }
    let history = user.history;
    if(!history.includes(mediaId)){
      history.push(mediaId);
      await user.save();
    }
    next();
  }catch(err){
    console.log(err);
    next();
  }
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




export default {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  removeFollower,removeFollowing,
  addFollower,addFollowing,
  addToHistory
  

}