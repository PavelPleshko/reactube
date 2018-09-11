import initialState from '../../media.initial-state';
import types from '../../media.types';

const updateMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.UPDATE_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:true
				},
				isError:{
					...state.isError,
					singleMedia:null
				}
			}
		break;	

		case types.UPDATE_MEDIA_SUCCESS:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
				all:{
					byId:{
						...state.all,
						...state.all.byId,
						[payload._id]:payload
					}
				},
				singleMedia:payload
			}
		break;

		case types.UPDATE_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
					isError:{
					...state.isError,
					singleMedia:payload
				}
			}
		break;	
		default:
			return state;
	}	
}

export default updateMedia;