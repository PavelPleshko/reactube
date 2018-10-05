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









export {
getChannelsTopics
}