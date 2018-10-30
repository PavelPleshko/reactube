import initialState from '../../media.initial-state';
import types from '../../media.types';

const likeDislikeMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIKE_MEDIA_REQUEST:
		case types.DISLIKE_MEDIA_REQUEST:
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

		case types.LIKE_MEDIA_SUCCESS:
		case types.DISLIKE_MEDIA_SUCCESS:
			return  {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
				all:{
					...state.all,
					byId:{
						...state.all.byId,
						[payload._id]:payload
					}
				},
				singleMedia:payload
			}
		break;

		case types.LIKE_MEDIA_ERROR:
		case types.DISLIKE_MEDIA_ERROR:
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

export default likeDislikeMedia;