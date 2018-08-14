import { push } from 'connected-react-router'
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
		mediaApiCalls.listHistoryMedia({pageNumber,pageSize})
		.then(response=>{
			let {medias,total} = response.data;	
			dispatch(mediaActions.listHistoryMediaSuccess({medias,total}));
		}).catch((error) => {
			dispatch(mediaActions.listHistoryMediaError(error.message));
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
			console.log(medias);
			dispatch(mediaActions.searchMediaSuccess(medias));
			dispatch(push('/search/medias'));

		})
		.catch((error)=>{
			dispatch(mediaActions.searchMediaError(error.message));
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
	listPopularMedia,listRelatedMedia,listHistoryMedia,
	readMedia,updateMedia,removeMedia,replaceMediaFromPlaylist,

	likeMedia,dislikeMedia,searchMedia
}