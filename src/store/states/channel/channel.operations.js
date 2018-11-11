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
			let media = response.data.media;	
			dispatch(channelActions.getChannelMediaSuccess(media));
		}).catch((error) => {
			dispatch(channelActions.getChannelMediaError(error.message));
		})	
	}
}

const getUserSubscriptions = () => {
	return (dispatch)=>{
		dispatch(channelActions.getUserSubscriptionsRequest());
		channelApiCalls.getUserSubscriptions()
		.then(response=>{
			let subscriptions = response.data.channels;	
			dispatch(channelActions.getUserSubscriptionsSuccess(subscriptions));
		}).catch((error) => {
			dispatch(channelActions.getUserSubscriptionsError(error.message));
		})	
	}
}

const createNewChannel = (channelData) => {
	return (dispatch,getState)=>{
		dispatch(channelActions.createNewChannelRequest());
		const csrfToken = getState().csrf;
		channelApiCalls.createNewChannel({channelData,csrfToken})
		.then(response=>{
			const newChannel = response.data.newChannel;	
			dispatch(channelActions.createNewChannelSuccess(newChannel));
			const slug = newChannel.slug;
			dispatch(push(`/channel/${slug}`));
		}).catch((error) => {
			dispatch(channelActions.createNewChannelError(error.message));
		})	
	}
}

const updateChannel = (channelPartial,channelId) => {
	return (dispatch,getState)=>{
		dispatch(channelActions.updateChannelRequest());
		const csrfToken = getState().csrf;
		channelApiCalls.updateChannel({channelPartial,channelId,csrfToken})
		.then(response=>{
			const updatedChannel = response.data.updatedChannel;	
			dispatch(channelActions.updateChannelSuccess(updatedChannel));
		}).catch((error) => {
			dispatch(channelActions.updateChannelError(error.message));
		})	
	}
}

const subscribeToChannel = (channelId) => {
	return (dispatch,getState)=>{
		dispatch(channelActions.subscribeToChannelRequest());
		const csrfToken = getState().csrf;
		channelApiCalls.subscribeToChannel({channelId,csrfToken})
		.then(response=>{
			const updatedChannel = response.data.updatedChannel;	
			dispatch(channelActions.subscribeToChannelSuccess(updatedChannel));
		}).catch((error) => {
			dispatch(channelActions.subscribeToChannelError(error.message));
		})	
	}
}

const unsubscribeFromChannel = (channelId) => {
	return (dispatch,getState)=>{
		dispatch(channelActions.unsubscribeFromChannelRequest());
		const csrfToken = getState().csrf;
		channelApiCalls.unsubscribeFromChannel({channelId,csrfToken})
		.then(response=>{
			const updatedChannel = response.data.updatedChannel;	
			dispatch(channelActions.unsubscribeFromChannelSuccess(updatedChannel));
		}).catch((error) => {
			dispatch(channelActions.unsubscribeFromChannelError(error.message));
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
getUserSubscriptions,
getChannelMedia,
createNewChannel,
updateChannel,
getChannelBySlug,
unsubscribeFromChannel,
subscribeToChannel
}