import types from './media.types';
import userTypes from '../user/user.types';
import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';


import categoryReducer from './category';
import tagReducer from './tag';
import initialState from './media.initial-state';


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
		break;

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
		break
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
		break;	
		default:
		return state;
	}
}

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
		console.log(medias)
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

const getPopularMediaList = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIST_POPULAR_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					popular:true
				},
				isError:{
					...state.isError,
					popular:null
				}
			}
		break;	

		case types.LIST_POPULAR_MEDIA_SUCCESS:
		let byIds = {};
		payload.forEach(item=>{
			byIds[item._id] = {...item,type:'popular'}
		});
			return {
				...state,
				processing:{
					...state.processing,
					popular:false
				},
				popular:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}
		break;

		case types.LIST_POPULAR_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					popular:false
				},
					isError:{
					...state.isError,
					popular:payload
				}
			}
		break;	
		default:
			return state;
	}	
}

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

const listManipulations = (state=initialState,action)=> {
	const {type,payload} = action;
	switch(type){
		case types.REPLACE_MEDIA_FROM_LIST:
			let newState =  {
				...state,
				singleMedia:state.related.byId[payload],
				related:{
					...state.related,
					allIds:[...state.related.allIds.filter(id => id != payload)],
				}
			}
			delete newState.related.byId[payload];
			return newState;
			break;

			default:
				return state;
	}
}

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

const removeMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.REMOVE_MEDIA_REQUEST:
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

		case types.REMOVE_MEDIA_SUCCESS:
			let newState =  {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
				all:{
					...state.all,
					allIds: state.all.allIds.filter(id=>id !== payload._id),
				},
				singleMedia:null
			}
			delete newState.all.byId[payload._id];
			return newState;
		break;

		case types.REMOVE_MEDIA_ERROR:
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

const clearHistory = (state=initialState,action)=>{
	const {type,payload} = action;
	switch(type){
		case userTypes.REMOVE_VIEW_HISTORY_SUCCESS:
		case types.RESET_HISTORY_LIST:
		console.log(state,'RESETTTT')
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

const mediaReducer = reduceReducers(
	createMedia,
	getMediaList,
	getPopularMediaList,
	getRelatedMediaList,
	historyMediaList,
	watchlaterMediaList,
	listManipulations,
	readMedia,
	updateMedia,
	removeMedia,
	likeDislikeMedia,
	searchMedia,
	clearHistory
	);

const mainMediaReducer = combineReducers({
	medias:mediaReducer,
	categories:categoryReducer,
	tags:tagReducer
})
	
export default mainMediaReducer;