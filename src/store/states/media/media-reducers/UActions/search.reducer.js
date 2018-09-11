import initialState from '../../media.initial-state';
import types from '../../media.types';

const searchMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.SEARCH_MEDIA_REQUEST:
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

		case types.SEARCH_MEDIA_SUCCESS:
			let all = {
				byId:{},
				allIds:[]
			};
			payload.forEach((item)=>{
				all.byId[item._id] = item;
				all.allIds = [...all.allIds,item._id];
			})
			return  {
				...state,
				processing:{
					...state.processing,
					all:false
				},
				all:all
				
			}
		break;

		case types.SEARCH_MEDIA_ERROR:
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

export default searchMedia;