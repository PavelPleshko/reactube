const GET_COMMENTS_REQUEST = 'Single media page/GET_COMMENTS_REQUEST';
const GET_COMMENTS_SUCCESS = 'Api response/GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'Api response/GET_COMMENTS_ERROR';

const POST_COMMENT_REQUEST = 'Single media page/POST_COMMENT_REQUEST';
const POST_COMMENT_SUCCESS = 'Api response/POST_COMMENT_SUCCESS';
const POST_REPLY_SUCCESS = 'Api response/POST_REPLY_SUCCESS';
const POST_COMMENT_ERROR = 'Api response/POST_COMMENT_ERROR';

const GET_REPLIES_BY_COMMENT = 'Comments single media page/GET_REPLIES_BY_COMMENT';
const GET_REPLIES_BY_COMMENT_SUCCESS = 'Api response/GET_REPLIES_BY_COMMENT_SUCCESS';
const GET_REPLIES_BY_COMMENT_ERROR = 'Api response/GET_REPLIES_BY_COMMENT_ERROR';

const LIKE_COMMENT_REQUEST = 'Comments single media page/LIKE_COMMENT_REQUEST';
const LIKE_COMMENT_SUCCESS = 'Api response/LIKE_COMMENT_SUCCESS';
const LIKE_COMMENT_ERROR = 'Api response/LIKE_COMMENT_ERROR';

const DISLIKE_COMMENT_REQUEST = 'Comments single media page/DISLIKE_COMMENT_REQUEST';
const DISLIKE_COMMENT_SUCCESS = 'Api response/DISLIKE_COMMENT_SUCCESS';
const DISLIKE_COMMENT_ERROR = 'Api response/DISLIKE_COMMENT_ERROR';

export default {
	GET_COMMENTS_REQUEST,GET_COMMENTS_SUCCESS,GET_COMMENTS_ERROR,

	POST_COMMENT_REQUEST,POST_COMMENT_SUCCESS,POST_REPLY_SUCCESS,POST_COMMENT_ERROR,

	GET_REPLIES_BY_COMMENT,GET_REPLIES_BY_COMMENT_SUCCESS,GET_REPLIES_BY_COMMENT_ERROR,

	LIKE_COMMENT_REQUEST,LIKE_COMMENT_SUCCESS,LIKE_COMMENT_ERROR,
	DISLIKE_COMMENT_REQUEST,DISLIKE_COMMENT_SUCCESS,DISLIKE_COMMENT_ERROR,
}