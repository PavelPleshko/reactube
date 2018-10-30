import initialState from '../media.initial-state';
import types from '../media.types';

const watchlaterMediaList = (state=initialState,action)=>{
	const {type,payload} = action;
	switch(type){
		case types.LIST_WATCHLATER_MEDIA_REQUEST:
		case types.SEARCH_WATCHLATER_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					watchlater:true
				}
			}
		break;

		case types.LIST_WATCHLATER_MEDIA_SUCCESS:
		case types.SEARCH_WATCHLATER_SUCCESS:
		let byIds = {};
		let {total,medias} = payload;
		medias.forEach(item=>{
			byIds[item._id] = item
		});
			return {
				...state,
				processing:{
					...state.processing,
					watchlater:false
				},
				watchlater:{
					...state.watchlater,
					allIds:[...state.watchlater.allIds].concat(Object.keys(byIds)),
					byId:{...state.watchlater.byId,...byIds},
					currentPage:state.watchlater.currentPage+1,
					total:total
				}
			}
		break
		case types.LIST_WATCHLATER_MEDIA_ERROR:
		case types.SEARCH_WATCHLATER_ERROR:
			return {
				...state,
				isError:{
					...state.isError,
					watchlater:payload
				},
				processing:{
					...state.processing,
					watchlater:false
				}
			}
		break;	
		default:
		return state;
	}
}

export default watchlaterMediaList;