import Media from './media.model';
import Keyword from '../keyword/keyword.model';
import keywordCtrl from '../keyword/keyword.controller';
import _ from 'lodash';
import {sendError,sendSuccess,throwIfNoResult,throwError} from '../../helpers/responseHandler';
import config from '../../config/config';
import Cloudinary from 'cloudinary';
import formidable from 'formidable';
import path from 'path';
import mongoose from 'mongoose';

//lists 

const list = async (req, res) => {
  try{
     let medias = await Media.find({})
     sendSuccess(res,'Media list')({medias:medias});
  }catch(err){
    sendError(res)(err);
  }
}

const listPopular = async (req, res) => {
  try{
    let medias = await Media.find({})
                            .sort('-views')
                            .limit(25)
                            .populate('category','_id title')
                            .populate('postedBy', '_id firstName lastName')
                            
    sendSuccess(res,'Popular media list')({medias});
  }catch(err){
    sendError(res)(err);
  }
}

const listRelated = async (req, res) => {
  try{
    let medias = await Media.aggregate(
                          [{ $match: 
                            { _id: {$ne:req.media._id },
                            category:req.media.category}
                          },
                          {$sample:{size:6}},
                          {$lookup:{
                            from:"users",
                            localField:"postedBy",
                            foreignField:"_id",
                            as:"postedBy"
                          }},
                          {$unwind:"$postedBy"},
                          {$lookup:{
                            from:"categories",
                            localField:"category",
                            foreignField:"_id",
                            as:"category"
                          }},
                          {$unwind:"$category"},
                          {$project:{
                            "postedBy.hashed_password":0,
                            "postedBy.salt":0,
                            "postedBy.created":0,
                            "postedBy.verified":0,
                            "postedBy.email":0
                          }}        
                          ]);
    sendSuccess(res,'Related medias')({medias});
  }catch(err){
    sendError(res)(err);
  }
}

const listByUser = async (req, res) => {
  let user = req.profile;
  try{
    let medias = await Media.find({postedBy:user._id })
                             .populate('postedBy', '_id firstName lastName')
                             .sort('-created')
    sendSuccess(res,`Media by user ${user.firstName} ${user.lastName}`)({medias});
  } catch(err){
    sendError(res)(err);
  }
}

const getOwnHistoryList = async (req,res) => {
  let user = req.user;
  let {start=0,end=10} = req.query;
  let historySlice = req.user.history ? req.user.history.slice(start.end) : [];
   try{
    let medias = await Media.find({_id:{$in:historySlice}})
                             .populate('postedBy', '_id firstName lastName')
                             .sort('-created')
    sendSuccess(res,`Media history of user ${user.firstName} ${user.lastName}`)({medias});
  } catch(err){
    sendError(res)(err);
  }
}

const read = (req, res) => {
 sendSuccess(res,'Got media resource')({media:req.media});
}

const incrementViews = async (req, res, next) => {
  let media = req.media;
  try{
   let result = await Media.findByIdAndUpdate(media._id, {$inc: {"views": 1}}, 
    {new: true})
   .populate('category tags')
   .populate('postedBy','_id lastName firstName');

    req.media = result;
    next();
  }catch(err){
    sendError(res)(err);
  }    
}



const create = async  (req, res, next) => {
  let data = req.body;
  data.postedBy = req.user._id;
  let media = new Media(data);
  try{
      const newMedia = await media.save()
      sendSuccess(res,'Media created')({media:newMedia})
  }catch(err){
      sendError(res)(err);
  }
}


const getUploadDetails =(req,res,next)=>{
  if(!req.user){
    sendError(res,401,'You are not authorized to upload videos')();
  }else{
    console.log(req.query)
    let cloud_name = config.cloudinary.cloud_name;
    let cloud_preset = config.cloudinary.preset;
    let upload_link = `https://api.cloudinary.com/v1_1/${cloud_name}/${req.query.resource_type || 'video'}/upload`;
    sendSuccess(res,'Here is your upload link')({upload_link,cloud_preset})    
  }
}

//update
const update = async (req, res, next) => {
  let media = req.media
  media = _.extend(media, req.body)
  media.updated = Date.now()
  try{
    let updateMedia = await media.save();
    sendSuccess(res,'media was updated')({media:updateMedia})
  }catch(err){
    console.log(err);
    sendError(res)(err);
  }
}

//remove
const remove = async (req, res, next) => {
  let media = req.media
    try{
      let video_id = /(?:(upload.+))(?:\/)(.+)(?:\.(mp4|mpeg|avi|3gp))$/gm.exec(req.media.video_url)[2];
      let cloudDelete = await Cloudinary.v2.api
      .delete_resources([video_id],{...config.cloudinary,resource_type:'video'});
      let deletedMedia = await media.remove();
      sendSuccess(res,'Resource deleted')({media:deletedMedia});
    }catch(err){
      sendError(res)(err);
    }
}

//like dislike
const like = async (req,res,next)=>{
  try{
    let media = await Media.findById(req.body.mediaId);
    let isLiked = media.likes.indexOf(req.user._id.toString());
    let isDisliked = media.dislikes.indexOf(req.user._id.toString());
    if(isLiked >=0){
      media.likes.splice(isLiked,1);
    }else{
      media.likes = [...media.likes,req.user._id];
      if(isDisliked>=0)
       media.dislikes.splice(isDisliked,1);
    }
     let updatedMedia = await media.save();
      updatedMedia = await Media.populate(updatedMedia,'postedBy');
      sendSuccess(res,'Media was evaluated')({media:updatedMedia})
  }catch(err){
    sendError(res)(err);
  }
}

const dislike = async (req,res,next)=>{
  try{
    let media = await Media.findById(req.body.mediaId);
    let isLiked = media.likes.indexOf(req.user._id.toString());
    let isDisliked = media.dislikes.indexOf(req.user._id.toString());
    if(isDisliked  >=0 ){
      media.dislikes.splice(isDisliked,1);
    }else{
      media.dislikes = [...media.dislikes,req.user._id];
       if(isLiked>=0)
      media.likes.splice(isLiked,1); 
    }
    let updatedMedia = await media.save();
    updatedMedia = await Media.populate(updatedMedia,
      { path: 'postedBy', select: '_id firstName lastName' });
    sendSuccess(res,'Media was disliked')({media:updatedMedia})
  }catch(err){
    sendError(res)(err);
  }
}




const isPoster = (req, res, next) => {
  let isPoster = req.media && req.user 
  && req.media.postedBy.toString() == req.user._id.toString();
  if(!isPoster){
    return sendError(res,403,'User is not authorized')();
  }
  next()
}

const mediaByID = async (req, res, next, id) => {
  try{
      req.media = await Media.findById(id);
      
      next()
  }catch(err){
     sendError(res,404,'Resource is not found')(err);
  }
}


const getSuggestions = async (req,res,next)=>{
  let searchTerm = req.query.input;
  let query = {
      text:{$regex:searchTerm,$options:'i'}
  }
  try{
    let suggestions = await Keyword.find(query).limit(10).sort().select('text');
    sendSuccess(res,'suggested results')({suggestions});
  }catch(err){
    sendError(res)(err);
  }
}


const searchByKeywords = async (req,res,next) =>{
  let searchTerm = req.query.input;
  let query = {
    $or:[
      {title:{$regex:searchTerm,$options:'i'}},
      {description:{$regex:searchTerm,$options:'i'}}
    ]
  }
  try{
    let medias = await Media.find(query).limit(10).sort()
    .populate('postedBy','_id firstName lastName');
    let isSearchSuccessful = medias && medias.length>0;
    if(isSearchSuccessful){
      keywordCtrl.create(req.user,{text:searchTerm});
    }

    sendSuccess(res,'Requested medias')({medias});
  }catch(err){
    sendError(res)(err);
  }
}

export default {
  create,
  read,incrementViews,
  list,listPopular,listByUser,listRelated,getOwnHistoryList,
  getUploadDetails,
  mediaByID,
  isPoster,
  update,
  remove,
  like,dislike,
  getSuggestions,searchByKeywords
}