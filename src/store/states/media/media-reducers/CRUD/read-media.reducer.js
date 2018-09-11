import initialState from '../../media.initial-state';
import types from '../../media.types';

const readMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.READ_MEDIA_REQUEST:
			return {
				...state,
				singleMedia:null,
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

		case types.READ_MEDIA_SUCCESS:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
				singleMedia:payload
			}
		break;

		case types.READ_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
					isError:{
					...state.isError,
					singleMedia:payload
				},
				singleMedia:null
			}
		break;	
		default:
			return state;
	}	
}
 
export default readMedia;