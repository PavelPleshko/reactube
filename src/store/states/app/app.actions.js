import types from './app.types';

const searchSuggestionsRequest = () => ({
		type:types.SEARCH_SUGGESTIONS_REQUEST
})

const searchSuggestionsSuccess = (comments) => ({
		type:types.SEARCH_SUGGESTIONS_SUCCESS,
		payload:comments
})

const searchSuggestionsError = (error) => ({
		type:types.SEARCH_SUGGESTIONS_ERROR,
		payload:error
})

const openDrawer = () => ({
	type:types.OPEN_DRAWER
})

const closeDrawer = () => ({
	type:types.CLOSE_DRAWER
})

export default {
	searchSuggestionsRequest,searchSuggestionsSuccess,searchSuggestionsError,
	openDrawer,closeDrawer
}
