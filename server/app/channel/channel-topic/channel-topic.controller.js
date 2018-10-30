import ChannelTopic from './channel-topic.model';
import {sendSuccess,sendError} from '../../../helpers/responseHandler';


const create = async (req, res) => {
  try{
    const channelTopic = new ChannelTopic(req.body);
    let newChannelTopic = await channelTopic.save();
    sendSuccess(res)({newChannelTopic});
  }catch(err){
    sendError(res)(err);
  }
}

const listAll = async (req, res) => {
  try{ 
    let channelTopics = await ChannelTopic.find({});
    sendSuccess(res)({channelTopics});
  }catch(err){
    sendError(res)(err);
  }
}











export default {
  create,
  listAll
}