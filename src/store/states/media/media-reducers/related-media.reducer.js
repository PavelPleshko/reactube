import initialState from '../media.initial-state';
import types from '../media.types';

const getRelatedMediaList = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIST_RELATED_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					related:true
				},
				isError:{
					...state.isError,
					related:null
				}
			}
		break;	

		case types.LIST_RELATED_MEDIA_SUCCESS:
		let byIds = {};
		payload.forEach(item=>{
			byIds[item._id] = {...item,type:'related'}
		});
			return {
				...state,
				processing:{
					...state.processing,
					related:false
				},
				related:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}
		break;

		case types.LIST_RELATED_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					related:false
				},
					isError:{
					...state.isError,
					related:payload
				}
			}
		break;	
		default:
			return state;
	}	
}

export default getRelatedMediaList;