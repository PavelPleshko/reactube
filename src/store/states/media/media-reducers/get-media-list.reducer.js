import initialState from '../media.initial-state';
import types from '../media.types';

const getMediaList = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.GET_MEDIA_LIST_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					all:true
				},
				isError:{
					...state.isError,
					all:null
				}
			}
		break;	

		case types.GET_MEDIA_LIST_SUCCESS:
		let byIds = {};
		payload.forEach(item=>{
			byIds[item._id] = item
		});
			return {
				...state,
				processing:{
					...state.processing,
					all:false
				},
				all:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}
		break;

		case types.GET_MEDIA_LIST_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					all:false
				},
					isError:{
					...state.isError,
					all:payload
				}
			}
		break;	
		default:
			return state;
	}	
}

export default getMediaList;