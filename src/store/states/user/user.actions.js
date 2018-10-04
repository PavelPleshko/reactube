import createAction from '../utils/create-action';
import types from './user.types';


//login
const loginUserRequest = createAction(types.LOGIN_USER_REQUEST,'payload');
const loginUserSuccess = createAction(types.LOGIN_USER_SUCCESS,'payload');
const loginUserError = createAction(types.LOGIN_USER_ERROR,'payload'); 

//update
const updateHistorySettingsRequest = createAction(types.UPDATE_HISTORY_SETTINGS_REQUEST);
const updateHistorySettingsSuccess = createAction(types.UPDATE_HISTORY_SETTINGS_SUCCESS,'payload');
const updateHistorySettingsError = createAction(types.UPDATE_HISTORY_SETTINGS_ERROR,'payload');

//register
const registerUserRequest = createAction(types.REGISTER_USER_REQUEST,'payload'); 
const registerUserSuccess = createAction(types.REGISTER_USER_SUCCESS,'payload'); 
const registerUserError = createAction(types.REGISTER_USER_ERROR,'payload');

//history
const removeViewHistoryRequest = createAction(types.REMOVE_VIEW_HISTORY_REQUEST); 
const removeViewHistorySuccess = createAction(types.REMOVE_VIEW_HISTORY_SUCCESS,'payload');
const removeViewHistoryError = createAction(types.REMOVE_VIEW_HISTORY_ERROR,'payload');

//watch later
const addWatchLaterRequest = createAction(types.ADD_TO_WATCH_LATER_REQUEST);
const addWatchLaterSuccess = createAction(types.ADD_TO_WATCH_LATER_SUCCESS);
const addWatchLaterError = createAction(types.ADD_TO_WATCH_LATER_ERROR,'payload');


const getUsersChannelsRequest = createAction(types.GET_USERS_CHANNELS_REQUEST);
const getUsersChannelsSuccess = createAction(types.GET_USERS_CHANNELS_SUCCESS,'payload');
const getUsersChannelsError = createAction(types.GET_USERS_CHANNELS_ERROR,'payload');

export default {
	loginUserRequest,loginUserSuccess,loginUserError,

	updateHistorySettingsRequest,updateHistorySettingsSuccess,updateHistorySettingsError,

	registerUserRequest,registerUserSuccess,registerUserError,

	removeViewHistoryRequest,removeViewHistorySuccess,removeViewHistoryError,

	addWatchLaterRequest,addWatchLaterSuccess,addWatchLaterError,

	getUsersChannelsRequest,getUsersChannelsSuccess,getUsersChannelsError
}