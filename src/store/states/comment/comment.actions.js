import types from './comment.types';

const getCommentsRequest = () => ({
		type:types.GET_COMMENTS_REQUEST
})

const getCommentsSuccess = (comments) => ({
		type:types.GET_COMMENTS_SUCCESS,
		payload:comments
})

const getCommentsError = (error) => ({
		type:types.GET_COMMENTS_ERROR,
		payload:error
})

const postCommentRequest = () => ({
		type:types.POST_COMMENT_REQUEST
})

const postCommentSuccess = (comment) => ({
		type:types.POST_COMMENT_SUCCESS,
		payload:comment
})

const postReplySuccess = (reply) => ({
		type:types.POST_REPLY_SUCCESS,
		payload:reply
})

const postCommentError = (error) => ({
		type:types.POST_COMMENT_ERROR,
		payload:error
})

const getRepliesByCommentRequest = (commentId) => ({
		type:types.GET_REPLIES_BY_COMMENT,
		payload:commentId
})

const getRepliesByCommentSuccess = (replies) => ({
		type:types.GET_REPLIES_BY_COMMENT_SUCCESS,
		payload:replies
})

const getRepliesByCommentError = (error) => ({
		type:types.GET_REPLIES_BY_COMMENT_ERROR,
		payload:error
})

const likeCommentRequest = (commentId) => ({
		type:types.LIKE_COMMENT_REQUEST,
		payload:commentId
})

const likeCommentSuccess = (comment) => ({
		type:types.LIKE_COMMENT_SUCCESS,
		payload:comment
})

const likeCommentError = (error) => ({
		type:types.LIKE_COMMENT_ERROR,
		payload:error
})

const dislikeCommentRequest = (commentId) => ({
		type:types.DISLIKE_COMMENT_REQUEST,
		payload:commentId
})

const dislikeCommentSuccess = (comment) => ({
		type:types.DISLIKE_COMMENT_SUCCESS,
		payload:comment
})

const dislikeCommentError = (error) => ({
		type:types.DISLIKE_COMMENT_ERROR,
		payload:error
})

export default {
	getCommentsRequest,getCommentsSuccess,getCommentsError,

	postCommentRequest,postCommentSuccess,postReplySuccess,postCommentError,

	getRepliesByCommentRequest,getRepliesByCommentSuccess,getRepliesByCommentError,

	likeCommentRequest,likeCommentSuccess,likeCommentError,

	dislikeCommentRequest,dislikeCommentSuccess,dislikeCommentError
}
