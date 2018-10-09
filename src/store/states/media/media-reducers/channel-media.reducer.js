import initialState from '../media.initial-state';
import types from '../media.types';

const getChannelMediaList = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIST_USER_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					channel:true
				},
				isError:{
					...state.isError,
					channel:null
				}
			}

		case types.LIST_USER_MEDIA_SUCCESS:
		let byIds = {};
		payload.medias.forEach(item=>{
			byIds[item._id] = {...item,type:'channel'}
		});
			return {
				...state,
				processing:{
					...state.processing,
					channel:false
				},
				channel:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}

		case types.LIST_USER_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					channel:false
				},
					isError:{
					...state.isError,
					channel:payload
				}
			}
		default:
			return state;
	}	
}

export default getChannelMediaList;