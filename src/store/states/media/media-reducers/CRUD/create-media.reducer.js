import initialState from '../../media.initial-state';
import types from '../../media.types';

const createMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.CREATE_MEDIA_REQUEST:
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

		case types.CREATE_MEDIA_SUCCESS:
			return {
				...state,
				processing:{
					...state.processing,
					all:false
				},
				all:{
					allIds:[...state.all.allIds,payload._id],
					byId:{
						...state.all.byId,
						[payload._id]:payload
					}
				}
			}
		break;

		case types.CREATE_MEDIA_ERROR:
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

export default createMedia;