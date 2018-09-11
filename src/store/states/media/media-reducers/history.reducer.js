import reduceReducers from 'reduce-reducers';

import initialState from '../media.initial-state';
import types from '../media.types';
import userTypes from '../../user/user.types';

const historyMediaList = (state=initialState,action)=>{
	const {type,payload} = action;
	switch(type){
		case types.LIST_HISTORY_MEDIA_REQUEST:
		case types.SEARCH_HISTORY_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					history:true
				}
			}
		case types.LIST_HISTORY_MEDIA_SUCCESS:
		case types.SEARCH_HISTORY_SUCCESS:
		let byIds = {};
		let {total,medias} = payload;
		medias.forEach(item=>{
			byIds[item._id] = item
		});
			return {
				...state,
				processing:{
					...state.processing,
					history:false
				},
				history:{
					...state.history,
					allIds:[...state.history.allIds].concat(Object.keys(byIds)),
					byId:{...state.history.byId,...byIds},
					currentPage:state.history.currentPage+1,
					total:total
				}
			}
		case types.LIST_HISTORY_MEDIA_ERROR:
		case types.SEARCH_HISTORY_ERROR:
			return {
				...state,
				isError:{
					...state.isError,
					history:payload
				},
				processing:{
					...state.processing,
					history:false
				}
			}
		default:
		return state;
	}
}


const clearHistory = (state=initialState,action)=>{
	const {type,payload} = action;
	switch(type){
		case userTypes.REMOVE_VIEW_HISTORY_SUCCESS:
		case types.RESET_HISTORY_LIST:
			return {
				...state,
				history:{
					...state.history,
					byId:{},
					allIds:[],
					currentPage:0,
					total:0
				}
			}
		default:
			return state;
	}
}

export default reduceReducers(
                    historyMediaList,
                    clearHistory
                );