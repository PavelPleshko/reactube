import types from './media.types';
import userTypes from '../user/user.types';
import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';


import categoryReducer from './category';
import tagReducer from './tag';
import initialState from './media.initial-state';


import createMedia from './media-reducers/create-media.reducer';
import getMediaList from './media-reducers/get-media-list.reducer';
import historyMediaList from './media-reducers/history.reducer';
import watchlaterMediaList from './media-reducers/watchlater.reducer';
import getPopularMediaList from './media-reducers/popular-medias.reducer';
import getRelatedMediaList from './media-reducers/related-media.reducer';
//crud
import removeMedia from './media-reducers/CRUD/remove-media.reducer';





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