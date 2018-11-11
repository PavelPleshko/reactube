import Channel from './channel.model';
import Media from '../media/media.model';
import config from '../../config/config';
import formidable from 'formidable';
import extend from 'lodash/extend';
import {sendSuccess,sendError} from '../../helpers/responseHandler';
import {uploadFileFromPathToCloudinary} from '../../helpers/cloudinaryManager';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const create = async (req, res, next) => {
  try{
    let owner = req.user && req.user._id;
    let data = {...req.body,owner};
    const channel = new Channel(data);
    const newChannel = await channel.save();
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

const listChannelMedia = async (req, res) => {
  try{
    const channelId = req.params.channelId;
    const media = await Media.find({channel:channelId});
    sendSuccess(res)({media});
  }catch(err){
    sendError(res)(err);
  }
}

const listChannels = async (req,res)=>{
	try{
		const channels = await Channel.find();
		sendSuccess(res)({channels});
	}catch(err){
		sendError(res)(err);
	}
}

const listSubscriptions = async (req,res)=>{
	try{
		const user = req.user;
		const subscriptions = user.subscribed;
		const channels = await Channel.find({_id:{$in:subscriptions}});
		sendSuccess(res)({channels});
	}catch(err){
		sendError(res)(err);
	}
}

const updateChannel = async (req, res) => {
  try{
    const channelId = req.params.channelId;
    let channel = req.channel;
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

const notOwner = (req,res,next) => {
  const user = req.user;
  const channel = req.channel;
  if(!user){
    sendError(res,401,'You have to be signed in.')();
  }
  if(user._id.toString() !== channel.owner._id.toString()){
    return next();
  }else{
     sendError(res,401,'You are the owner of this channel.')();
  }
}

const subscribe = async (req,res,next) => {
  const subscriber = req.user;
  const channel = req.channel;
  const channelId = channel && channel._id;
  try{
      const chSubscribers = channel.subscribers;
      const subscriberId = subscriber._id;
      const isSubscribed = chSubscribers.find(sub=>sub.toString() === subscriberId.toString());
      const hasSubscription = subscriber.subscribed.find(sub=>sub.toString() === channelId.toString());
      if(!isSubscribed && !hasSubscription){
        chSubscribers.push(subscriberId);
        subscriber.subscribed.push(channelId);
        const [updatedChannel,user] = await Promise.all([channel.save(),subscriber.save()]);
        sendSuccess(res,'Subscribed to channel')({updatedChannel});
      }else{
        const err = new Error('You are already subscribed to this channel');
        err.code = 403;
        throw err;
      }
  }catch(err){
    sendError(res)(err)
  }
}

const unsubscribe = async (req,res,next) => {
  const subscriber = req.user;
  const channel = req.channel;
  const channelId = channel && channel._id;
  try{
      const chSubscribers = channel.subscribers;
      const subscriberId = subscriber._id;
      const isSubscribedIdx = chSubscribers.findIndex(sub=>sub.toString() === subscriberId.toString());
      const hasSubscriptionIdx = subscriber.subscribed.findIndex(sub=>sub.toString() === channelId.toString());
      if(isSubscribedIdx >= 0 && hasSubscriptionIdx >= 0){
        chSubscribers.splice(isSubscribedIdx,1);
        subscriber.subscribed.splice(hasSubscriptionIdx,1);
        const [updatedChannel,user] = await Promise.all([channel.save(),subscriber.save()]);
        sendSuccess(res,'Unsubscribed from channel')({updatedChannel});
      }else{
        const err = new Error('You are already unsubscribed from this channel');
        err.code = 403;
        throw err;
      }
  }catch(err){
    sendError(res)(err)
  }
}

const findById = async (req,res,next)=>{
   const channelId = req.params.channelId;
   try{
    const channel = await Channel.findById(channelId);
    req.channel = channel;
    next();
   }catch(err){
    sendError(res)(err);
   }
}

export default {
  create,readBySlug,listChannelMedia,listChannels,listSubscriptions,
  updateChannel,subscribe,unsubscribe,
  isOwner,notOwner,findById
}