import Media from './media.model';
import Keyword from '../keyword/keyword.model';
import keywordCtrl from '../keyword/keyword.controller';
import extend from 'lodash/extend';
import {sendError,sendSuccess,throwIfNoResult,throwError} from '../../helpers/responseHandler';
import config from '../../config/config';
import Cloudinary from 'cloudinary';
import formidable from 'formidable';
import path from 'path';
import mongoose from 'mongoose';
import MongoAggregator,{Facet as FacetBuilder,inArray} from '../../helpers/mongoose-aggregator';
import {removeResourceFromCloudinary,getResourceIdFromLink} from '../../helpers/cloudinaryManager';

const toObjectId = mongoose.Types.ObjectId;
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
    const query = MongoAggregator()
                    .match({ _id: {$ne:req.media._id },
                          category:req.media.category})
                    .sample(6)
                    .populate('users','postedBy','_id')
                    .populate('categories','category','_id')
                    .project(null,['postedBy.hashed_password','postedBy.salt',
                      'postedBy.created','postedBy.email'])
                    .value();

    const medias = await Media.aggregate(query);
    sendSuccess(res,'Related medias')({medias});
  }catch(err){
    sendError(res)(err);
  }
}

const listByUser = async (req, res) => {
  const user = req.user;
  const userId = req.params.userId || user._id;
  try{
    const medias = await Media.find({postedBy:userId })
                             .populate('postedBy', '_id firstName lastName')
                             .sort('-created')
    sendSuccess(res,`Media by user ${user.firstName} ${user.lastName}`)({medias});
  } catch(err){
    sendError(res)(err);
  }
}

const getContinueWatchingList = async (req, res) => {
  const user = req.user;
  const mediaList = user ? user.continueWatching : [];
  const mediaListIds = mediaList.map(item=>toObjectId(item.mediaId));
  const total = mediaListIds.length;

    const query = MongoAggregator().match({_id: inArray(mediaListIds)})
                                    .addFields({'__order': {$indexOfArray: [mediaListIds, '$_id' ]}})
                                    .sort('__order')
                                    .populate('users','postedBy','_id')
                                    .populate('categories','category','_id')
                                    .value();
  try{
    let medias = await Media.aggregate(query);
    medias = medias.map((media,idx)=>Object.assign({},media,{fromTime:mediaList[idx].fromTime}));
    sendSuccess(res,`Continue watching medias`)({medias,total});
  } catch(err){
    sendError(res)(err);
  }
}

const getOwnMediaList = async (req,res) => {
  const user = req.user;
  let {pageNumber=0,pageSize=5,searchField='history'} = req.query;
  const start = Number(pageNumber*pageSize);
  const end = start+Number(pageSize);
  const searchArrSlice = user[searchField] ? user[searchField].slice(start,end) : [];
  const ids = searchArrSlice.map(el=>toObjectId(el.id));
  const total = user[searchField].length;
  const query = MongoAggregator().match({_id: inArray(ids)})
                                    .addFields({'__order': {$indexOfArray: [ids, '$_id' ]}})
                                    .sort('__order')
                                    .populate('users','postedBy','_id')
                                    .populate('categories','category','_id')
                                    .value();
   try{
    const medias = await Media.aggregate(query);  
    sendSuccess(res,`Medias of user ${user.firstName} ${user.lastName}`)({medias,total});
  } catch(err){
    sendError(res)(err);
  }
}
const getOwnMediaBySearch = async (req,res) => {
  const user = req.user;
  let {input,page=0,pageSize=5,searchField='history'} = req.query;
  pageSize = +pageSize;
  const skip = +(page*pageSize);
  const searchArrSlice = user[searchField] ? user[searchField] : [];
  const ids = searchArrSlice.map(el=>toObjectId(el.id));
  const facet = FacetBuilder()
                .newField('results')
                .skip(skip)
                .limit(pageSize)
                .populate('users','postedBy','_id')
                .populate('categories','category','_id')
                .newField('count')
                .count();
  const query = MongoAggregator()
                  .match({_id: inArray(ids),
                     $or:[
                     {title:{$regex:input,$options:'i'}},
                     {description:{$regex:input,$options:'i'}}
                     ]
                   })
                  .addFields({'__order': {$indexOfArray: [ids, '$_id' ]}})
                  .sort('__order')
                  .facet(facet)
                  .value();
   try{
    let data = await Media.aggregate(query);
    data = data[0];   
    const medias = data.results;
    const total = data.count[0].total;                  
    sendSuccess(res,`Medias of user ${user.firstName} ${user.lastName}`)({medias,total});
  } catch(err){
    sendError(res)(err);
  }
}

const read = (req, res) => {
 sendSuccess(res,'Got media resource')({media:req.media});
}

const incrementViews = async (req, res, next) => {
  const media = req.media;
  try{
   const result = await Media.findByIdAndUpdate(media._id, {$inc: {"views": 1}}, 
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
  const data = req.body;
  data.postedBy = req.user._id;
  try{
      const media = new Media(data);
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
    const {cloud_name,cloud_preset,cloudinary_url} = config.cloudinary;
    const upload_link = `${cloudinary_url}${cloud_name}/${req.query.resource_type || 'video'}/upload`;
    sendSuccess(res,'Here is your upload link')({upload_link,cloud_preset})    
  }
}

//update
const update = async (req, res, next) => {
  let media = req.media
  media = extend(media, req.body)
  media.updated = Date.now()
  try{
    const updatedMedia = await media.save();
    sendSuccess(res,'media was updated')({media:updatedMedia})
  }catch(err){
    sendError(res)(err);
  }
}

//remove
const remove = async (req, res, next) => {
  const media = req.media
    try{
      const videoId = getResourceIdFromLink(media.video_url,'video');
      if(videoId){
         const cloudDelete = await removeResourceFromCloudinary([videoId],'video');
      } 
      const deletedMedia = await media.remove();
      sendSuccess(res,'Resource deleted')({media:deletedMedia});
    }catch(err){
      sendError(res)(err);
    }
}

//like dislike
const like = async (req,res,next)=>{
  try{
    const media = await Media.findById(req.body.mediaId);
    const isLiked = media.likes.indexOf(req.user._id.toString());
    const isDisliked = media.dislikes.indexOf(req.user._id.toString());
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
    const media = await Media.findById(req.body.mediaId);
    const isLiked = media.likes.indexOf(req.user._id.toString());
    const isDisliked = media.dislikes.indexOf(req.user._id.toString());
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
  const isPoster = req.media && req.user 
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
  const searchTerm = req.query.input;
  const query = {
      text:{$regex:searchTerm,$options:'i'}
  }
  try{
    const suggestions = await Keyword.find(query).limit(10).sort().select('text');
    sendSuccess(res,'suggested results')({suggestions});
  }catch(err){
    sendError(res)(err);
  }
}


const searchByKeywords = async (req,res,next) =>{
  const searchTerm = req.query.input;
  const query = {
    $or:[
      {title:{$regex:searchTerm,$options:'i'}},
      {description:{$regex:searchTerm,$options:'i'}}
    ]
  }
  try{
    const medias = await Media.find(query).limit(10).sort()
    .populate('postedBy','_id firstName lastName');
    const isSearchSuccessful = medias && medias.length>0;
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
  list,listPopular,listByUser,listRelated,getOwnMediaList,
  getContinueWatchingList,
  getUploadDetails,
  mediaByID,
  isPoster,
  update,
  remove,
  like,dislike,
  getSuggestions,searchByKeywords,getOwnMediaBySearch
}