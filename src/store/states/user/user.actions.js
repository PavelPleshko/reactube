
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

//update
const updateHistorySettingsRequest = ()=>({
		type:types.UPDATE_HISTORY_SETTINGS_REQUEST
})

const updateHistorySettingsSuccess = (user)=>({
		type:types.UPDATE_HISTORY_SETTINGS_SUCCESS,
		payload:user
})

const updateHistorySettingsError = (error)=>({
		type:types.UPDATE_HISTORY_SETTINGS_ERROR,
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

	updateHistorySettingsRequest,updateHistorySettingsSuccess,updateHistorySettingsError,

	registerUserRequest,registerUserSuccess,registerUserError,

	removeViewHistoryRequest,removeViewHistorySuccess,removeViewHistoryError
}