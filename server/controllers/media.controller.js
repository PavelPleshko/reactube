import Media from '../models/media.model';
import _ from 'lodash';
import errorHandler from '../helpers/dbErrorHandler';
import config from './../config/config';
import Cloudinary from 'cloudinary';
import formidable from 'formidable';
import path from 'path';

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

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const create = (req, res, next) => {
  let media = new Media(req.body);
  saveMedia(media,res);
}


const getUploadDetails =(req,res,next)=>{
  if(!req.user){
    res.status(401).json({
      status:401,
      data:null,
      message:'You are not authorized to upload videos'
    })
  }else{
    let cloud_name = config.cloudinary.cloud_name;
    let cloud_preset = config.cloudinary.preset;
    let upload_link = `https://api.cloudinary.com/v1_1/${cloud_name}/${req.body.resource_type || 'video'}/upload`;
    res.status(200).json({
      status:200,
      data:{
        upload_link,
        cloud_preset
    }}
    )
  }
}


function saveMedia(media,res){
           media.save((err) => {
    if (err) {
      return res.status(400).json({
        status:400,
        data:null,
        message: errorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json(media);
  })
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





export default {
  create,
  read,
  list,
  remove,
  getUploadDetails
}