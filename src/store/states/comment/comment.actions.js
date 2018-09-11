import types from './comment.types';
import createAction from '../utils/create-action';

const getCommentsRequest = createAction(types.GET_COMMENTS_REQUEST);
const getCommentsSuccess = createAction(types.GET_COMMENTS_SUCCESS,'payload'); 
const getCommentsError = createAction(types.GET_COMMENTS_ERROR,'payload');

const postCommentRequest = createAction(types.POST_COMMENT_REQUEST);
const postCommentSuccess = createAction(types.POST_COMMENT_SUCCESS,'payload');
const postReplySuccess = createAction(types.POST_REPLY_SUCCESS,'payload'); 
const postCommentError = createAction(types.POST_COMMENT_ERROR,'payload');

const getRepliesByCommentRequest = createAction(types.GET_REPLIES_BY_COMMENT,'payload');
const getRepliesByCommentSuccess = createAction(types.GET_REPLIES_BY_COMMENT_SUCCESS,'payload');
const getRepliesByCommentError = createAction(types.GET_REPLIES_BY_COMMENT_ERROR,'payload');

const likeCommentRequest = createAction(types.LIKE_COMMENT_REQUEST,'payload');
const likeCommentSuccess = createAction(types.LIKE_COMMENT_SUCCESS,'payload');
const likeCommentError = createAction(types.LIKE_COMMENT_ERROR,'payload');

const dislikeCommentRequest = createAction(types.DISLIKE_COMMENT_REQUEST,'payload');
const dislikeCommentSuccess = createAction(types.DISLIKE_COMMENT_SUCCESS,'payload');
const dislikeCommentError = createAction(types.DISLIKE_COMMENT_ERROR,'payload');

export default {
	getCommentsRequest,getCommentsSuccess,getCommentsError,

	postCommentRequest,postCommentSuccess,postReplySuccess,postCommentError,

	getRepliesByCommentRequest,getRepliesByCommentSuccess,getRepliesByCommentError,

	likeCommentRequest,likeCommentSuccess,likeCommentError,

	dislikeCommentRequest,dislikeCommentSuccess,dislikeCommentError
}
