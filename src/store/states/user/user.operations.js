import { push } from 'connected-react-router'
import {signin,signup} from './user.api';
import userActions from './user.actions';



const login = credentials => {
	return (dispatch)=>{
		dispatch(userActions.loginUserRequest(credentials));
		signin(credentials)
		.then(response=>{
			let user = response.data.user;
			let token = response.data.token;
			if(token){
				user.token = token;
				localStorage.setItem('jwtToken', token);
			}
		dispatch(userActions.loginUserSuccess(user));
		dispatch(push('/'));
		}).catch((error) => {
			dispatch(userActions.loginUserError(error.message));
		})	
	}
}


const register = (credentials) =>{
	return (dispatch)=>{
		dispatch(userActions.loginUserRequest(credentials));
		signup(credentials)
		.then(response=>{
		dispatch(userActions.registerUserSuccess(response.data));
		}).catch((error) => {
			dispatch(userActions.registerUserError(error.message));
		})	
	}
}


export default {
	login,register
}