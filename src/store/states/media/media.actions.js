import types from './media.types';

//creating
const createMediaRequest = (media)=> ({
		type:types.CREATE_MEDIA_REQUEST,
		payload:media
})

const createMediaSuccess = (media) => ({
		type:types.CREATE_MEDIA_SUCCESS,
		payload:media
})

const createMediaError = (error) => ({
		type:types.CREATE_MEDIA_ERROR,
		payload:error
})


//listing
//popular
const listPopularMediaRequest = () => ({
		type:types.LIST_POPULAR_MEDIA_REQUEST
})

const listPopularMediaSuccess = (medias) => ({
		type:types.LIST_POPULAR_MEDIA_SUCCESS,
		payload:medias
})

const listPopularMediaError = (error) => ({
		type:types.LIST_POPULAR_MEDIA_ERROR,
		payload:error
})

//related
const listRelatedMediaRequest = () => ({
		type:types.LIST_RELATED_MEDIA_REQUEST
})

const listRelatedMediaSuccess = (medias) => ({
		type:types.LIST_RELATED_MEDIA_SUCCESS,
		payload:medias
})

const listRelatedMediaError = (error) => ({
		type:types.LIST_RELATED_MEDIA_ERROR,
		payload:error
})


const replaceMediaFromList = (mediaId) => ({
		type:types.REPLACE_MEDIA_FROM_LIST,
		payload:mediaId
})




//reading
const readMediaRequest = () =>({
	type:types.READ_MEDIA_REQUEST
})

const readMediaSuccess = (media) =>({
	type:types.READ_MEDIA_SUCCESS,
	payload:media
})

const readMediaError = (error) =>({
	type:types.READ_MEDIA_ERROR,
	payload:error
})

//updating
const updateMediaRequest = () =>({
	type:types.UPDATE_MEDIA_REQUEST
})

const updateMediaSuccess = (media) =>({
	type:types.UPDATE_MEDIA_SUCCESS,
	payload:media
})

const updateMediaError = (error) =>({
	type:types.UPDATE_MEDIA_ERROR,
	payload:error
})

//updating
const removeMediaRequest = () =>({
	type:types.REMOVE_MEDIA_REQUEST
})

const removeMediaSuccess = (media) =>({
	type:types.REMOVE_MEDIA_SUCCESS,
	payload:media
})

const removeMediaError = (error) =>({
	type:types.REMOVE_MEDIA_ERROR,
	payload:error
})

//like dislike
const likeMediaRequest = () =>({
	type:types.LIKE_MEDIA_REQUEST
})

const likeMediaSuccess = (media) =>({
	type:types.LIKE_MEDIA_SUCCESS,
	payload:media
})

const likeMediaError = (error) =>({
	type:types.LIKE_MEDIA_ERROR,
	payload:error
})

const dislikeMediaRequest = () =>({
	type:types.DISLIKE_MEDIA_REQUEST
})

const dislikeMediaSuccess = (media) =>({
	type:types.DISLIKE_MEDIA_SUCCESS,
	payload:media
})

const dislikeMediaError = (error) =>({
	type:types.DISLIKE_MEDIA_ERROR,
	payload:error
})

//search

const searchMediaRequest = () =>({
	type:types.SEARCH_MEDIA_REQUEST
})

const searchMediaSuccess = (medias) =>({
	type:types.SEARCH_MEDIA_SUCCESS,
	payload:medias
})

const searchMediaError = (error) =>({
	type:types.SEARCH_MEDIA_ERROR,
	payload:error
})


export default {
	//create
	createMediaRequest,createMediaSuccess,createMediaError,
	//lists
	listPopularMediaRequest,listPopularMediaSuccess,listPopularMediaError,

	listRelatedMediaRequest,listRelatedMediaSuccess,listRelatedMediaSuccess,

	//list manipulations
	replaceMediaFromList,
	//read
	readMediaRequest,readMediaSuccess,readMediaError,
	//update
	updateMediaRequest,updateMediaSuccess,updateMediaError,
	//delete
	removeMediaRequest,removeMediaSuccess,removeMediaError,

	//like dislike
	likeMediaRequest,likeMediaSuccess,likeMediaError,
	dislikeMediaRequest,dislikeMediaSuccess,dislikeMediaError,

	//search
	searchMediaRequest,searchMediaSuccess,searchMediaError
}
