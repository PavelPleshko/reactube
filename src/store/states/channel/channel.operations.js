import { push } from 'connected-react-router/lib/actions';

import * as channelApiCalls from './channel.api';
import channelActions from './channel.actions';


const getChannelsTopics = () => {
	return (dispatch)=>{
		dispatch(channelActions.getChannelsTopicsRequest());
		channelApiCalls.getChannelsTopics()
		.then(response=>{
			let topics = response.data.channelTopics;	
			dispatch(channelActions.getChannelsTopicsSuccess(topics));
		}).catch((error) => {
			dispatch(channelActions.getChannelsTopicsError(error.message));
		})	
	}
}

const getChannelMedia = (channelId) => {
	return (dispatch)=>{
		dispatch(channelActions.getChannelMediaRequest());
		channelApiCalls.getChannelMedia(channelId)
		.then(response=>{
			console.log(response);
			let media = response.data.media;	
			dispatch(channelActions.getChannelMediaSuccess(media));
		}).catch((error) => {
			dispatch(channelActions.getChannelMediaError(error.message));
		})	
	}
}

const createNewChannel = (channelData) => {
	return (dispatch,getState)=>{
		dispatch(channelActions.createNewChannelRequest());
		let csrfToken = getState().csrf;
		channelApiCalls.createNewChannel({channelData,csrfToken})
		.then(response=>{
			let newChannel = response.data.newChannel;	
			dispatch(channelActions.createNewChannelSuccess(newChannel));
			let slug = newChannel.slug;
			dispatch(push(`/channel/${slug}`));
		}).catch((error) => {
			dispatch(channelActions.createNewChannelError(error.message));
		})	
	}
}

const getChannelBySlug = (slug) => {
	return (dispatch)=>{
		dispatch(channelActions.getChannelBySlugRequest());
		channelApiCalls.getChannelBySlug(slug)
		.then(response=>{
			let channel = response.data.channel;	
			dispatch(channelActions.getChannelBySlugSuccess(channel));
		}).catch((error) => {
			dispatch(channelActions.getChannelBySlugError(error.message));
		})	
	}
}









export {
getChannelsTopics,
getChannelMedia,
createNewChannel,
getChannelBySlug
}