import { push } from 'connected-react-router'
import * as userApiCalls from './user.api';
import userActions from './user.actions';



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
		// dispatch(push('/'));
		}).catch((error) => {
			dispatch(userActions.loginUserError(error.message));
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
	login,register,
	clearHistory
}