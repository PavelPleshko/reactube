import { push } from 'connected-react-router/lib/actions';
import * as mediaApiCalls from './media.api';
import mediaActions from './media.actions';



const createMedia = media => {
	return (dispatch,getState)=>{
		dispatch(mediaActions.createMediaRequest());
		let csrfToken = getState().csrf;
		mediaApiCalls.create({media,csrfToken})
		.then(response=>{
			let media = response.data.media;	
			dispatch(mediaActions.createMediaSuccess(media));
			dispatch(push('/'));
		}).catch((error) => {
			dispatch(mediaActions.createMediaError(error.message));
		})	
	}
}

const listPopularMedia = () => {
	return (dispatch)=>{
		dispatch(mediaActions.listPopularMediaRequest());
		mediaApiCalls.listPopular()
		.then(response=>{
			let medias = response.data.medias;	
			dispatch(mediaActions.listPopularMediaSuccess(medias));
		}).catch((error) => {
			dispatch(mediaActions.listPopularMediaError(error.message));
		})	
	}
}

const listRelatedMedia = (mediaId) => {
	return (dispatch)=>{
		dispatch(mediaActions.listRelatedMediaRequest());
		mediaApiCalls.listRelated({mediaId})
		.then(response=>{
			let medias = response.data.medias;	
			dispatch(mediaActions.listRelatedMediaSuccess(medias));
		}).catch((error) => {
			dispatch(mediaActions.listRelatedMediaError(error.message));
		})	
	}
}

const listHistoryMedia = (pageNumber,pageSize) => {
	return (dispatch)=>{
		dispatch(mediaActions.listHistoryMediaRequest());
		mediaApiCalls.listHistoryMedia({pageNumber,pageSize,searchField:'history'})
		.then(response=>{
			let {medias,total} = response.data;	
			dispatch(mediaActions.listHistoryMediaSuccess({medias,total}));
		}).catch((error) => {
			dispatch(mediaActions.listHistoryMediaError(error.message));
		})	
	}
}

const listWatchlaterMedia = (pageNumber,pageSize) => {
	return (dispatch)=>{
		dispatch(mediaActions.listWatchlaterMediaRequest());
		mediaApiCalls.listWatchlaterMedia({pageNumber,pageSize,searchField:'watchlater'})
		.then(response=>{
			let {medias,total} = response.data;	
			dispatch(mediaActions.listWatchlaterMediaSuccess({medias,total}));
		}).catch((error) => {
			dispatch(mediaActions.listWatchlaterMediaError(error.message));
		})	
	}
}

const listUserMedia = (pageNumber,pageSize) => {
	return (dispatch)=>{
		dispatch(mediaActions.listUserMediaRequest());
		mediaApiCalls.listByUser()
		.then(response=>{
			let {medias,total} = response.data;	
			dispatch(mediaActions.listUserMediaSuccess({medias,total}));
		}).catch((error) => {
			dispatch(mediaActions.listUserMediaError(error.message));
		})	
	}
}

const readMedia = (mediaId,redirectAfterRead=false) => {
	return (dispatch)=>{
		dispatch(mediaActions.readMediaRequest());
		mediaApiCalls.read({mediaId})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.readMediaSuccess(media));
			if(redirectAfterRead){
				dispatch(push(`/media/${media._id}`))
			}
		})
		.catch((error)=>{
			dispatch(mediaActions.readMediaError(error.message));
		})
	}
}


const updateMedia = (media,mediaId) => {
	return (dispatch,getState)=>{
		dispatch(mediaActions.updateMediaRequest());
		let csrfToken = getState().csrf;
		mediaApiCalls.update({media,mediaId,csrfToken})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.updateMediaSuccess(media));
			dispatch(push(`/media/${mediaId}`));
		})
		.catch((error)=>{
			dispatch(mediaActions.updateMediaError(error.message));
		})
	}
}

const removeMedia = (mediaId) => {
	return (dispatch,getState)=>{
		dispatch(mediaActions.removeMediaRequest());
		let csrfToken = getState().csrf;
		mediaApiCalls.remove({mediaId,csrfToken})
		.then(response=>{
			let media = response.data.mediaId;
			dispatch(mediaActions.removeMediaSuccess(media));
			dispatch(push('/'));
		})
		.catch((error)=>{
			dispatch(mediaActions.removeMediaError(error.message));
		})
	}
}

const likeMedia = (mediaId) => {
	return (dispatch,getState)=>{
		dispatch(mediaActions.likeMediaRequest());
		let csrfToken = getState().csrf;
		mediaApiCalls.like({mediaId,csrfToken})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.likeMediaSuccess(media));
		})
		.catch((error)=>{
			dispatch(mediaActions.likeMediaError(error.message));
		})
	}
}

const dislikeMedia = (mediaId) => {
	return (dispatch,getState)=>{
		dispatch(mediaActions.dislikeMediaRequest());
		let csrfToken = getState().csrf;
		mediaApiCalls.dislike({mediaId,csrfToken})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.dislikeMediaSuccess(media));
		})
		.catch((error)=>{
			dispatch(mediaActions.dislikeMediaError(error.message));
		})
	}
}

const searchMedia = (input) => {
	return (dispatch)=>{
		dispatch(mediaActions.searchMediaRequest());
		mediaApiCalls.searchMediaBy({input})
		.then(response=>{
			let medias = response.data.medias;
			dispatch(mediaActions.searchMediaSuccess(medias));
			dispatch(push('/search/medias'));

		})
		.catch((error)=>{
			dispatch(mediaActions.searchMediaError(error.message));
		})
	}
}

const searchHistory = (input,page,pageSize) => {
	return (dispatch)=>{
		dispatch(mediaActions.searchHistoryRequest());
		//let csrfToken = getState().csrf;
		mediaApiCalls.searchHistory({input,page,pageSize})
		.then(response=>{
			console.log(response);
		let {medias,total} = response.data;	
			if(page == 0){
				dispatch(mediaActions.resetHistoryList());
			}
			dispatch(mediaActions.searchHistorySuccess({medias,total}));
		})
		.catch((error)=>{
			dispatch(mediaActions.searchHistoryError(error.message));
		})
	}
}


const searchWatchlater = (input,page,pageSize) => {
	return (dispatch)=>{
		dispatch(mediaActions.searchWatchlaterRequest());
		//let csrfToken = getState().csrf;
		mediaApiCalls.searchWatchlater({input,page,pageSize})
		.then(response=>{
			console.log(response);
		let {medias,total} = response.data;	
			if(page == 0){
				dispatch(mediaActions.resetWatchlater());
			}
			dispatch(mediaActions.searchWatchlaterSuccess({medias,total}));
		})
		.catch((error)=>{
			dispatch(mediaActions.searchWatchlaterError(error.message));
		})
	}
}


const replaceMediaFromPlaylist = (mediaId) => {
	return (dispatch)=>{
		dispatch(mediaActions.replaceMediaFromList(mediaId))
	}
}

export {
	createMedia,
	listPopularMedia,listRelatedMedia,listHistoryMedia,listWatchlaterMedia,listUserMedia,
	readMedia,updateMedia,removeMedia,replaceMediaFromPlaylist,

	likeMedia,dislikeMedia,searchMedia,searchHistory,searchWatchlater
}