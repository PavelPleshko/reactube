import * as userApiCalls from './user.api';
import userActions from './user.actions';
import * as appOperations from '../app/app.operations';


const login = credentials => {
	return (dispatch,getState)=>{
		dispatch(userActions.loginUserRequest(credentials));
		let csrfToken = getState().csrf;
		userApiCalls.signin({user:credentials,csrfToken})
		.then(response=>{
			let user = response.data.user;
			if(response.data.token){
				user.token = response.data.token;
			}
		dispatch(userActions.loginUserSuccess(user));
		}).catch((error) => {
			dispatch(userActions.loginUserError(error.message));
		})	
	}
}

const logout = () => {
	return (dispatch,getState)=>{
		dispatch(userActions.logoutUserRequest());
		let csrfToken = getState().csrf;
		userApiCalls.signout({csrfToken})
		.then(response=>{
		dispatch(userActions.logoutUserSuccess());
		}).catch((error) => {
			dispatch(userActions.logoutUserError(error.message));
		})	
	}
}

const checkSession = () => {
	return (dispatch) =>{
		userApiCalls.checkSessionAndSignin()
		.then(response=>{
			let user = response.data.user;
			if(response.data.token){
				user.token = response.data.token;
			}
			dispatch(appOperations.showSnackbar({message:`Session restored. Welcome back ${user.firstName}`,
				variant:'success'}));
			dispatch(userActions.loginUserSuccess(user));
		}).catch((error) => {
		console.log(error);
		})	
	}
}

const getUserChannels = userId => { //TODO put it in channel store
	return dispatch => {
		dispatch(userActions.getUsersChannelsRequest());
		userApiCalls.getUserChannels(userId)
.then(response=>{
			let channels = response.data.channels;
			dispatch(userActions.getUsersChannelsSuccess(channels,userId));
		}).catch((error) => {
		dispatch(userActions.getUsersChannelsError(error));
		})	
	}
}

const updateUser = (partialProfile,notify=false) => {
	return (dispatch,getState)=>{
		dispatch(userActions.updateUserRequest());
		let csrfToken = getState().csrf;
		let token = getState().user.data.token;
		userApiCalls.update({partialProfile,csrfToken})
		.then(response=>{
			let user = response.data.user;
			user.token = token;
			dispatch(userActions.updateUserSuccess(user));
			if(notify){
				dispatch(appOperations.showSnackbar({message:'User information successfully updated',
				variant:'success'}));
			}
		}).catch((error) => {
			dispatch(userActions.updateUserError(error.message));
		})	
	}
}

const addToWatchlater = (mediaId) => {
	return (dispatch,getState)=>{
		dispatch(userActions.addWatchLaterRequest());
		let csrfToken = getState().csrf;
		userApiCalls.addToWatchlater({csrfToken,mediaId})
		.then(response=>{
			let user = response.data.user;
			dispatch(appOperations.showSnackbar({message:'Successfully added media to watchlist',
				variant:'success'}));
			dispatch(userActions.addWatchLaterSuccess(user));
		}).catch((error) => {
			dispatch(userActions.addWatchLaterError(error.message));
		})	
	}
}

const register = (credentials) =>{
	return (dispatch,getState)=>{
		dispatch(userActions.loginUserRequest(credentials));
		const csrfToken = getState().csrf;
		userApiCalls.signup({user:credentials,csrfToken})
		.then(response=>{
		const user = response.data.user;
		dispatch(userActions.registerUserSuccess(user));
		}).catch((error) => {
			dispatch(userActions.registerUserError(error.message));
		})	
	}
}

const clearHistory = () =>{
	return (dispatch,getState)=>{
		dispatch(userActions.removeViewHistoryRequest());
		let csrfToken = getState().csrf;
		let user = getState().user.data;
		userApiCalls.clearHistory({csrfToken})
		.then(response=>{
		user.history = [];
		dispatch(userActions.removeViewHistorySuccess(user));
		}).catch((error) => {
			dispatch(userActions.removeViewHistoryError(error.message));
		})	
	}
}

const addToContinueWatching = (mediaId,fromTime,duration) => {
	return (dispatch,getState)=>{
		dispatch(userActions.addToContinueWatchingRequest());
		let csrfToken = getState().csrf;
		userApiCalls.addToContinueWatching({mediaId,fromTime,duration,csrfToken})
		.then(response=>{
			dispatch(userActions.addToContinueWatchingSuccess({}));
		})
		.catch((error)=>{
			dispatch(userActions.addToContinueWatchingError(error.message));
		})
	}
}



export {
	login,logout,register,checkSession,
	clearHistory,
	addToWatchlater,
	updateUser,
	getUserChannels,
	addToContinueWatching
}