import {listAllByMedia,postComment,getReplies} from './comment.api';
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
	return (dispatch)=>{
		dispatch(commentActions.postCommentRequest());
		postComment(comment)
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
			dispatch(commentActionsgetRepliesByCommentError(error.message));
		})	
	}
}


export {
	getComments,
	postNewComment,
	getRepliesByComment
}