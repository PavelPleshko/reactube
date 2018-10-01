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

const checkSession = () => {
	return (dispatch) =>{
		userApiCalls.checkSessionAndSignin()
		.then(response=>{
			let user = response.data.user;
			if(response.data.token){
				user.token = response.data.token;
			}
			dispatch(userActions.loginUserSuccess(user));
		}).catch((error) => {
		console.log(error);
		})	
	}
}

const updateHistorySettings = historySettings => {
	return (dispatch,getState)=>{
		dispatch(userActions.updateHistorySettingsRequest());
		let csrfToken = getState().csrf;
		let token = getState().user.data.token;
		userApiCalls.update({partialProfile:historySettings,csrfToken})
		.then(response=>{
			let user = response.data.user;
			user.token = token;
			dispatch(userActions.updateHistorySettingsSuccess(user));
		}).catch((error) => {
			dispatch(userActions.updateHistorySettingsError(error.message));
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
		let csrfToken = getState().csrf;
		userApiCalls.signup({user:credentials,csrfToken})
		.then(response=>{
		dispatch(userActions.registerUserSuccess(response.data));
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


export {
	login,register,checkSession,
	clearHistory,
	addToWatchlater,
	updateHistorySettings
}