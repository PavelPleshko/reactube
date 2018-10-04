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
		break;	

		case types.LOGIN_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload
			}
		break;

		case types.LOGIN_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload,
				data:null
			}
		break;

		case types.UPDATE_HISTORY_SETTINGS_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;	

		case types.UPDATE_HISTORY_SETTINGS_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload
			}
		break;

		case types.UPDATE_HISTORY_SETTINGS_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}
		break;

		case types.ADD_TO_WATCH_LATER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;

		case types.ADD_TO_WATCH_LATER_SUCCESS:
			return {
				...state,
				processing:false,
				data:{
					...state.data,
					...payload
				}
			}
		break;

		case types.ADD_TO_WATCH_LATER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}
		break;

		case types.REGISTER_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;	

		case types.REGISTER_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload,
				isError:null
			}
		break;	

		case types.REGISTER_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}
		break;

		case types.REMOVE_VIEW_HISTORY_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;

		case types.REMOVE_VIEW_HISTORY_SUCCESS:
			return {
				...state,
				processing:false,
				data:payload
			}
		break;
		
		case types.REMOVE_VIEW_HISTORY_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}
		break;

		case types.GET_USERS_CHANNELS_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;

		case types.GET_USERS_CHANNELS_SUCCESS:
			return {
				...state,
				processing:false,
				data:{
					...state.data,
					channels:payload
				}
			}
		break;
		
		case types.GET_USERS_CHANNELS_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}
		break;


		default:
			return state;
	}

	
}


export default userReducer;