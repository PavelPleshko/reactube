import types from './app.types';
import createAction from '../utils/create-action';

const searchSuggestionsRequest = createAction(types.SEARCH_SUGGESTIONS_REQUEST);
const searchSuggestionsSuccess = createAction(types.SEARCH_SUGGESTIONS_SUCCESS,'payload');
const searchSuggestionsError = createAction(types.SEARCH_SUGGESTIONS_ERROR,'payload');

const openDrawer = createAction(types.OPEN_DRAWER);
const closeDrawer = createAction(types.CLOSE_DRAWER);

const showSnackbar = createAction(types.SHOW_SNACKBAR,'payload');
const hideSnackbar = createAction(types.HIDE_SNACKBAR);

export default {
	searchSuggestionsRequest,searchSuggestionsSuccess,searchSuggestionsError,
	openDrawer,closeDrawer,
	showSnackbar,hideSnackbar
}
