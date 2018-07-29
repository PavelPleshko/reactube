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



export default {
	searchSuggestionsRequest,searchSuggestionsSuccess,searchSuggestionsError,
}
