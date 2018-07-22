import types from './user.types';

let isLogged = null;
if (typeof(window) !== "undefined") {
   JSON.parse(localStorage.getItem('user'));
}  
const initialState = isLogged ? { processing:false,
	isError:false,
	data:isLogged} : {processing:false,
	isError:false,
	data:null};

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

		default:
			return state;
	}

	
}


export default userReducer;