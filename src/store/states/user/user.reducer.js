import types from './user.types';

const initialState = {
		processing:false,
		isError:false,
		data:null,
	};

const userReducer = (state=initialState,action) => {
	const {type,payload} = action;

	switch(type){
		case types.LOGIN_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.LOGIN_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload
			}

		case types.LOGIN_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload,
				data:null
			}
		case types.LOGOUT_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.LOGOUT_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:null
			}

		case types.LOGOUT_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}

		case types.UPDATE_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.UPDATE_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload
			}

		case types.UPDATE_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}

		case types.ADD_TO_WATCH_LATER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.ADD_TO_WATCH_LATER_SUCCESS:
			return {
				...state,
				processing:false,
				data:{
					...state.data,
					...payload
				}
			}

		case types.ADD_TO_WATCH_LATER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}

		case types.REGISTER_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.REGISTER_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload,
				isError:null
			}

		case types.REGISTER_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}

		case types.REMOVE_VIEW_HISTORY_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.REMOVE_VIEW_HISTORY_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload
			}
		
		case types.REMOVE_VIEW_HISTORY_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}

		case types.GET_USERS_CHANNELS_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.GET_USERS_CHANNELS_SUCCESS:
			return {
				...state,
				processing:false,
				data:{
					...state.data,
					channels:payload
				}
			}
		
		case types.GET_USERS_CHANNELS_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}


		default:
			return state;
	}

	
}


export default userReducer;