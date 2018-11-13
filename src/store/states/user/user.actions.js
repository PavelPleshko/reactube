import createAction from '../utils/create-action';
import types from './user.types';


//login
const loginUserRequest = createAction(types.LOGIN_USER_REQUEST,'payload');
const loginUserSuccess = createAction(types.LOGIN_USER_SUCCESS,'payload');
const loginUserError = createAction(types.LOGIN_USER_ERROR,'payload'); 
//logout
const logoutUserRequest = createAction(types.LOGOUT_USER_REQUEST);
const logoutUserSuccess = createAction(types.LOGOUT_USER_SUCCESS);
const logoutUserError = createAction(types.LOGOUT_USER_ERROR,'payload'); 

//update
const updateUserRequest = createAction(types.UPDATE_USER_REQUEST);
const updateUserSuccess = createAction(types.UPDATE_USER_SUCCESS,'payload');
const updateUserError = createAction(types.UPDATE_USER_ERROR,'payload');

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

const addToContinueWatchingRequest = createAction(types.ADD_TO_CONTINUE_WATCHING_REQUEST);
const addToContinueWatchingSuccess = createAction(types.ADD_TO_CONTINUE_WATCHING_SUCCESS,'payload');
const addToContinueWatchingError = createAction(types.ADD_TO_CONTINUE_WATCHING_ERROR,'payload');


export default {
	loginUserRequest,loginUserSuccess,loginUserError,
	logoutUserRequest,logoutUserSuccess,logoutUserError,

	updateUserRequest,updateUserSuccess,updateUserError,

	registerUserRequest,registerUserSuccess,registerUserError,

	removeViewHistoryRequest,removeViewHistorySuccess,removeViewHistoryError,

	addWatchLaterRequest,addWatchLaterSuccess,addWatchLaterError,

	getUsersChannelsRequest,getUsersChannelsSuccess,getUsersChannelsError,

	addToContinueWatchingRequest,addToContinueWatchingSuccess,addToContinueWatchingError,

}