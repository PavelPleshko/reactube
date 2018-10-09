import Channel from './channel.model';
import Media from '../media/media.model';
//import Cloudinary from 'cloudinary';
//import formidable from 'formidable';
import {sendSuccess,sendError} from '../../helpers/responseHandler';


const create = async (req, res, next) => {
  try{
    let owner = req.user && req.user._id;
    let data = {...req.body,owner};
      console.log(data);
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
        console.log(channelId);

    const media = await Media.find({channel:channelId});
    sendSuccess(res)({media});
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
  isOwner
}