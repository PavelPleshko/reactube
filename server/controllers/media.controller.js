import Media from '../models/media.model';
import _ from 'lodash';
import errorHandler from '../helpers/dbErrorHandler';
import {sendError,sendSuccess,throwIfNoResult} from '../helpers/responseHandler';
import config from './../config/config';
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
                            .limit(10)
                            .populate('category','_id title')
                            .populate('postedBy', '_id firstName lastName')
                            .sort('-views');
    sendSuccess(res,'Popular media list')({medias});
  }catch(err){
    sendError(res)(err);
  }
}

const listRelated = async (req, res) => {
  try{
    let medias = await Media.find({ "_id": { "$ne": req.media._id },
                                    "category": req.media.category})
                                    .limit(5)
                                    .sort('-views')
                                    .populate('postedBy', '_id firstName lastName')
                                    .populate('category')
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
    let cloud_name = config.cloudinary.cloud_name;
    let cloud_preset = config.cloudinary.preset;
    let upload_link = `https://api.cloudinary.com/v1_1/${cloud_name}/${req.body.resource_type || 'video'}/upload`;
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
      console.log(video_id,cloudDelete)
      let deletedMedia = await media.remove();
      sendSuccess(res,'Resource deleted')({media:deletedMedia});
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

export default {
  create,
  read,incrementViews,
  list,listPopular,listByUser,listRelated,
  getUploadDetails,
  mediaByID,
  isPoster,
  update,
  remove
}