import Channel from '../channel/channel.model';
import Media from '../media/media.model';

const updateInterests = async(user,channelId,actionType,topicId,mediaId) => {
  const actionsWeight = {
    like:2,
    dislike:-2,
    subscribe:3,
    watchLater:2,
    view:1
  };
  try{
     const weight = actionsWeight[actionType] || 1;
     const interests = user.interests;
      if(!channelId && mediaId){
        const mediaEntry = await Media.findById(mediaId);
        channelId = mediaEntry.channel;
      }
      if(!topicId){
        const channelEntry = await Channel.findById(channelId);
        topicId = channelEntry.topic;
      }
      let index = 0;
      const found = interests.find((item,idx) => {
          if(item.topicId.toString() === topicId.toString()){
            index = idx;
            return true;
          }
          return false;
        })
      if(found){
          const newElement = interests[index];
          newElement.updated = Date.now();
          newElement.weight += weight;
          interests.set(index,newElement);
      }else{
        interests.push({weight,topicId,channelId})
      }
      return user;
}catch(err){
  console.log(err);
}
 
}


export {
  updateInterests
}