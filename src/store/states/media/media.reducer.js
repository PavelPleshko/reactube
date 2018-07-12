import * as userActions from './user.actions';

let isLogged = JSON.parse(localStorage.getItem('user'));
const initialState = isLogged ? { processing:false,
	isError:false,
	data:isLogged} : {processing:false,
	isError:false,
	data:null};

export function userReducer(state=initialState,action){
	switch(action.type){
		case userActions.LOGIN_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;	
		case userActions.LOGIN_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:action.payload
			}
		break;
		case userActions.LOGIN_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:action.payload,
				data:null
			}
		break;
		case userActions.REGISTER_USER_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;	
		case userActions.REGISTER_USER_SUCCESS:
			return {
				...state,
				processing:false,
				data:action.payload,
				isError:null

			}
		break;	
		case userActions.REGISTER_USER_ERROR:
			return {
				...state,
				processing:false,
				isError:action.payload
			}
		break;
		default:
			return state;
	}

	
}