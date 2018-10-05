import createAction from '../utils/create-action';
import types from './channel.types';


//login
const getChannelsTopicsRequest = createAction(types.GET_CHANNELS_TOPICS_REQUEST);
const getChannelsTopicsSuccess = createAction(types.GET_CHANNELS_TOPICS_SUCCESS,'payload');
const getChannelsTopicsError = createAction(types.GET_CHANNELS_TOPICS_ERROR,'payload'); 



export default {
	getChannelsTopicsRequest,getChannelsTopicsSuccess,getChannelsTopicsError,
}