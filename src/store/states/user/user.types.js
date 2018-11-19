import createActionStrings from '../utils/create-action-strings';

const loginUserTypes = createActionStrings('LOGIN_USER','Signin page');
const logoutUserTypes = createActionStrings('LOGOUT_USER','Navbar component');
const registerUserTypes = createActionStrings('REGISTER_USER','Signup page');
const updateUserTypes = createActionStrings('UPDATE_USER','Profile/history page');
const getUsersChannelsTypes = createActionStrings('GET_USERS_CHANNELS','Channels component');
const removeViewHistoryTypes = createActionStrings('REMOVE_VIEW_HISTORY','History page');
const addToWatchLaterTypes = createActionStrings('ADD_TO_WATCH_LATER','Watch later page');
const addToContinueWatchingTypes = createActionStrings('ADD_TO_CONTINUE_WATCHING','Single media page');


export default {
	...loginUserTypes,
	...logoutUserTypes,
	...registerUserTypes,
	...updateUserTypes,
	...getUsersChannelsTypes,
	...removeViewHistoryTypes,
	...addToWatchLaterTypes,
	...addToContinueWatchingTypes
}