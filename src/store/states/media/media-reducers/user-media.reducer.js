import initialState from '../media.initial-state';
import types from '../media.types';

const getUserMediaList = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIST_USER_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					user:true
				},
				isError:{
					...state.isError,
					user:null
				}
			}

		case types.LIST_USER_MEDIA_SUCCESS:
		let byIds = {};
		payload.medias.forEach(item=>{
			byIds[item._id] = {...item,type:'user'}
		});
			return {
				...state,
				processing:{
					...state.processing,
					user:false
				},
				user:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}

		case types.LIST_USER_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					user:false
				},
					isError:{
					...state.isError,
					user:payload
				}
			}
		default:
			return state;
	}	
}

export default getUserMediaList;