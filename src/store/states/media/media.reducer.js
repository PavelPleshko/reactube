import types from './media.types';
import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';


import categoryReducer from './category';
import tagReducer from './tag';
import initialState from './media.initial-state';


import getMediaList from './media-reducers/get-media-list.reducer';
import historyMediaList from './media-reducers/history.reducer';
import channelMediaList from './media-reducers/channel-media.reducer';
import watchlaterMediaList from './media-reducers/watchlater.reducer';
import getPopularMediaList from './media-reducers/popular-medias.reducer';
import getRelatedMediaList from './media-reducers/related-media.reducer';
import continueWatching from './media-reducers/continue-watching.reducer';
//crud
import createMedia from './media-reducers/CRUD/create-media.reducer';
import removeMedia from './media-reducers/CRUD/remove-media.reducer';
import readMedia from './media-reducers/CRUD/read-media.reducer';
import updateMedia from './media-reducers/CRUD/update-media.reducer';
//UActions
import likeDislikeMedia from './media-reducers/UActions/like-media.reducer';
import searchMedia from './media-reducers/UActions/search.reducer';

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

const mediaReducer = reduceReducers(
	createMedia,
	getMediaList,
	channelMediaList,
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
	continueWatching
	);

const mainMediaReducer = combineReducers({
	medias:mediaReducer,
	categories:categoryReducer,
	tags:tagReducer
})
	
export default mainMediaReducer;