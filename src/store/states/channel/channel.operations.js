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
			console.log(response);
			let channel = response.data.channel;	
			dispatch(channelActions.getChannelBySlugSuccess(newChannel));
		}).catch((error) => {
			dispatch(channelActions.getChannelBySlugError(error.message));
		})	
	}
}









export {
getChannelsTopics,
createNewChannel,
getChannelBySlug
}