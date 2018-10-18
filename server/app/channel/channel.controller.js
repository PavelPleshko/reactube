import Channel from './channel.model';
import Media from '../media/media.model';
import config from '../../config/config';
import formidable from 'formidable';
import extend from 'lodash/extend';
import {sendSuccess,sendError} from '../../helpers/responseHandler';
import {uploadFileFromPathToCloudinary} from '../../helpers/cloudinaryManager';

const create = async (req, res, next) => {
  try{
    let owner = req.user && req.user._id;
    let data = {...req.body,owner};
    const channel = new Channel(data);
    let newChannel = await channel.save();
    sendSuccess(res)({newChannel});
  }catch(err){
    console.log(err);
    sendError(res)(err);
  }
}

const readBySlug = async (req, res, next) => {
  try{
    const slug = req.params.channelSlug;
    const channel = await Channel.findOne({slug});
    sendSuccess(res)({channel});
  }catch(err){
    sendError(res)(err);
  }
}

const listChannelMedia = async (req, res, next) => {
  try{
    const channelId = req.params.channelId;
    const media = await Media.find({channel:channelId});
    sendSuccess(res)({media});
  }catch(err){
    sendError(res)(err);
  }
}

const updateChannel = async (req, res) => {
  try{
    const channelId = req.params.channelId;
    let channel = await Channel.findById(channelId);
    channel = extend(channel,req.body);
    const files = req.files;
      if(files){
        for(const fileName in files){
           const pathToPhoto = files[fileName].path;
           const previousPath = channel[fileName];
           const result = await uploadFileFromPathToCloudinary(pathToPhoto,fileName,'image',previousPath);
           const secure_url = result.secure_url;
           channel[fileName] = secure_url;
        }
        const updatedChannel = await channel.save();
        sendSuccess(res)({updatedChannel});
      }
  
  }catch(err){
    sendError(res)(err);
  }
}

const isOwner = (req,res,next) => {
  const user = req.user;
  const channel = req.channel;
  if(!user){
    sendError(res,401,'You have to be signed in.')();
  }
  if(user._id === channel.owner._id){
    return next();
  }else{
     sendError(res,401,'You are not the owner of this channel.')();
  }
}










export default {
  create,readBySlug,listChannelMedia,
  updateChannel,
  isOwner
}