import types from './tag.types';

const getTagsRequest = () => ({
		type:types.GET_TAGS_REQUEST
})

const getTagsSuccess = (tags) => ({
		type:types.GET_TAGS_SUCCESS,
		payload:tags
})

const getTagsError = (error) => ({
		type:types.GET_TAGS_ERROR,
		payload:error
})

export default {
	getTagsRequest,getTagsSuccess,getTagsError
}
