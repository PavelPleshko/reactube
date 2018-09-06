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

const showSnackbar = (message,variant) =>({
	type:types.SHOW_SNACKBAR,
	payload:{message,variant}
})

const hideSnackbar = () => ({
	type:types.HIDE_SNACKBAR
})

export default {
	searchSuggestionsRequest,searchSuggestionsSuccess,searchSuggestionsError,
	openDrawer,closeDrawer,
	showSnackbar,hideSnackbar
}
