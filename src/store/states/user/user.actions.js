
import {signin,signup} from './user.api';
import * as alertActions from '../shared/alert/alert.actions';
import { push } from 'connected-react-router'

//login
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export function loginUserRequest(user){
	return {
		type:LOGIN_USER_REQUEST,
		payload:user
	}
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export function loginUserSuccess(user){
	return {
		type:LOGIN_USER_SUCCESS,
		payload:user
	}
}
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export function loginUserError(error){
	return {
		type:LOGIN_USER_ERROR,
		payload:error
	}
}


export const login = credentials => {
	return (dispatch)=>{
		dispatch(loginUserRequest(credentials));
		signin(credentials)
		.then(response=>{
			let user = response.data.user;
			let token = response.data.token;
			if(token){
				user.token = token;
				localStorage.setItem('jwtToken', token);
			}
			console.log(response);
		dispatch(loginUserSuccess(user));
		dispatch(alertActions.alertSuccess(`Authentication was successful.`));

		dispatch(push('/'));
		}).catch((error) => {
			dispatch(loginUserError(error.message));
			dispatch(alertActions.alertError(error.message))
		})	
	}
}

//register
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export function registerUserRequest(user){
	return {
		type:REGISTER_USER_REQUEST,
		payload:user
	}
}

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export function registerUserSuccess(user){
	return {
		type:REGISTER_USER_SUCCESS,
		payload:user
	}
}
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export function registerUserError(error){
	return {
		type:REGISTER_USER_ERROR,
		payload:error
	}
}


export const register = (credentials) =>{
	return (dispatch)=>{
		dispatch(loginUserRequest(credentials));
		signup(credentials)
		.then(response=>{
		dispatch(registerUserSuccess(response.data));
		dispatch(alertActions.alertSuccess(`Registration was successful.`))
		}).catch((error) => {
			dispatch(registerUserError(error.message));
			dispatch(alertActions.alertError(error.message))
		})	
	}
}
