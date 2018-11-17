import createActionStrings from '../utils/create-action-strings';

const getCommentsTypes = createActionStrings('GET_COMMENTS','Single media page');
const postCommentTypes = createActionStrings('POST_COMMENT','Single media page');
const getRepliesByCommentTypes = createActionStrings('GET_REPLIES_BY_COMMENT','Comments single media page');
const likeCommentTypes = createActionStrings('LIKE_COMMENT','Comments single media page');
const dislikeCommentTypes = createActionStrings('DISLIKE_COMMENT','Comments single media page');

const POST_REPLY_SUCCESS = 'Api response/POST_REPLY_SUCCESS';


export default {
	...getCommentsTypes,
	...postCommentTypes,
	...getRepliesByCommentTypes,
	...likeCommentTypes,
	...dislikeCommentTypes,
	POST_REPLY_SUCCESS
}