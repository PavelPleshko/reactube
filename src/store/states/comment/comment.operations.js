import {listAllByMedia,postComment,getReplies,
likeComment,dislikeComment} from './comment.api';
import commentActions from './comment.actions';

const getComments = (mediaId) => {
	return (dispatch)=>{
		dispatch(commentActions.getCommentsRequest());
		listAllByMedia({mediaId})
		.then(response=>{
			let comments = response.data.comments;			
		dispatch(commentActions.getCommentsSuccess(comments));
		}).catch((error) => {
			dispatch(commentActions.getCommentsError(error.message));
		})	
	}
}

const postNewComment = (comment,isReply=false) => {
	return (dispatch,getState)=>{
		dispatch(commentActions.postCommentRequest());
		let csrfToken = getState().csrf;
		postComment({comment,csrfToken})
		.then(response=>{
			console.log(response);
			let comment = response.data.comment;
			let action = isReply ? 'postReplySuccess' : 'postCommentSuccess';			
			dispatch(commentActions[action](comment));
		}).catch((error) => {
			console.log(error);
			dispatch(commentActions.postCommentError(error.message));
		})	
	}
}

const getRepliesByComment = (commentId) => {
	return (dispatch)=>{
		dispatch(commentActions.getRepliesByCommentRequest());
		getReplies({commentId})
		.then(response=>{
			console.log(response);
			let replies = response.data.replies;
			dispatch(commentActions.getRepliesByCommentSuccess({replies,commentId}));
		}).catch((error) => {
			console.log(error);
			dispatch(commentActions.getRepliesByCommentError(error.message));
		})	
	}
}

const likeUserComment = (commentId) => {
	return (dispatch,getState)=>{
		dispatch(commentActions.likeCommentRequest());
		let csrfToken = getState().csrf;
		likeComment({commentId,csrfToken})

		.then(response=>{
			console.log(response);
			let comment = response.data.comment;
			dispatch(commentActions.likeCommentSuccess(comment));
		}).catch((error) => {
			console.log(error);
			dispatch(commentActions.likeCommentError(error.message));
		})	
	}
}

const dislikeUserComment = (commentId) => {
	return (dispatch,getState)=>{
		dispatch(commentActions.dislikeCommentRequest());
		let csrfToken = getState().csrf;
		dislikeComment({commentId,csrfToken})
		.then(response=>{
			console.log(response);
			let comment = response.data.comment;
			dispatch(commentActions.dislikeCommentSuccess(comment));
		}).catch((error) => {
			console.log(error);
			dispatch(commentActions.dislikeCommentError(error.message));
		})	
	}
}


export {
	getComments,
	postNewComment,
	getRepliesByComment,
	likeUserComment,dislikeUserComment,
}