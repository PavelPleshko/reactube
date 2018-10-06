import createAction from '../utils/create-action';
import types from './channel.types';


//login
const getChannelsTopicsRequest = createAction(types.GET_CHANNELS_TOPICS_REQUEST);
const getChannelsTopicsSuccess = createAction(types.GET_CHANNELS_TOPICS_SUCCESS,'payload');
const getChannelsTopicsError = createAction(types.GET_CHANNELS_TOPICS_ERROR,'payload'); 

const createNewChannelRequest = createAction(types.CREATE_NEW_CHANNEL_REQUEST);
const createNewChannelSuccess = createAction(types.CREATE_NEW_CHANNEL_SUCCESS,'payload');
const createNewChannelError = createAction(types.CREATE_NEW_CHANNEL_ERROR,'payload'); 

const getChannelBySlugRequest = createAction(types.GET_CHANNEL_BY_SLUG_REQUEST);
const getChannelBySlugSuccess = createAction(types.GET_CHANNEL_BY_SLUG_SUCCESS,'payload');
const getChannelBySlugError = createAction(types.GET_CHANNEL_BY_SLUG_ERROR,'payload'); 



export default {
	getChannelsTopicsRequest,getChannelsTopicsSuccess,getChannelsTopicsError,

	createNewChannelRequest,createNewChannelSuccess,createNewChannelError,

	getChannelBySlugRequest,getChannelBySlugSuccess,getChannelBySlugError
}