import { push } from 'connected-react-router'
import {create,listPopular,listRelated,read,update,remove,
like,dislike} from './media.api';
import mediaActions from './media.actions';



const createMedia = mediaBody => {
	return (dispatch)=>{
		dispatch(mediaActions.createMediaRequest());
		create(mediaBody)
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
		listPopular()
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
		listRelated({mediaId})
		.then(response=>{
			let medias = response.data.medias;	
			dispatch(mediaActions.listRelatedMediaSuccess(medias));
		}).catch((error) => {
			dispatch(mediaActions.listRelatedMediaError(error.message));
		})	
	}
}


const readMedia = (mediaId) => {
	return (dispatch)=>{
		dispatch(mediaActions.readMediaRequest());
		read({mediaId})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.readMediaSuccess(media));
		})
		.catch((error)=>{
			dispatch(mediaActions.readMediaError(error.message));
		})
	}
}


const updateMedia = (mediaBody,mediaId) => {
	return (dispatch)=>{
		dispatch(mediaActions.updateMediaRequest());
		update(mediaBody,{mediaId})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.updateMediaSuccess(media));
		})
		.catch((error)=>{
			dispatch(mediaActions.updateMediaError(error.message));
		})
	}
}

const removeMedia = (mediaId) => {
	return (dispatch)=>{
		dispatch(mediaActions.removeMediaRequest());
		remove({mediaId})
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
	return (dispatch)=>{
		dispatch(mediaActions.likeMediaRequest());
		like({mediaId})
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
	return (dispatch)=>{
		dispatch(mediaActions.dislikeMediaRequest());
		dislike({mediaId})
		.then(response=>{
			let media = response.data.media;
			dispatch(mediaActions.dislikeMediaSuccess(media));
		})
		.catch((error)=>{
			dispatch(mediaActions.dislikeMediaError(error.message));
		})
	}
}

const replaceMediaFromPlaylist = (mediaId) => {
	return (dispatch)=>{
		dispatch(mediaActions.replaceMediaFromList(mediaId))
	}
}

export {
	createMedia,listPopularMedia,listRelatedMedia,
	readMedia,updateMedia,removeMedia,replaceMediaFromPlaylist,

	likeMedia,dislikeMedia
}