
import types from './user.types';


//login
const loginUserRequest = (user)=>({
		type:types.LOGIN_USER_REQUEST,
		payload:user
})

const loginUserSuccess = (user)=>({
		type:types.LOGIN_USER_SUCCESS,
		payload:user
})

const loginUserError = (error)=>({
		type:types.LOGIN_USER_ERROR,
		payload:error
})




//register
const registerUserRequest = (user) => ({
	type:types.REGISTER_USER_REQUEST,
	payload:user
})

const registerUserSuccess = (user) =>({
		type:types.REGISTER_USER_SUCCESS,
		payload:user
})

const registerUserError = (error) => ({
		type:types.REGISTER_USER_ERROR,
		payload:error
})

//history
const removeViewHistoryRequest = (user) => ({
	type:types.REMOVE_VIEW_HISTORY_REQUEST
})

const removeViewHistorySuccess = (user) =>({
		type:types.REMOVE_VIEW_HISTORY_SUCCESS,
		payload:user
})

const removeViewHistoryError = (error) => ({
		type:types.REMOVE_VIEW_HISTORY_ERROR,
		payload:error
})



export default {
	loginUserRequest,loginUserSuccess,loginUserError,

	registerUserRequest,registerUserSuccess,registerUserError,

	removeViewHistoryRequest,removeViewHistorySuccess,removeViewHistoryError
}