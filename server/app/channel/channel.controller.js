import Channel from './channel.model';
//import Cloudinary from 'cloudinary';
//import formidable from 'formidable';
import {sendSuccess,sendError} from '../../helpers/responseHandler';


const create = async (req, res, next) => {
  try{
    const channel = new Channel(req.body);
    let newChannel = await channel.save();
    sendSuccess(res)({newChannel});
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
  create,
  isOwner
}