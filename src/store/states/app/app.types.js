import createActionStrings from '../utils/create-action-strings';


const searchSuggestionsTypes = createActionStrings('SEARCH_SUGGESTIONS','Main nav search');

const OPEN_DRAWER = 'Main nav/OPEN_DRAWER';
const CLOSE_DRAWER = 'Drawer nav/CLOSE_DRAWER';

const SHOW_SNACKBAR = 'App page/SHOW_SNACKBAR';
const HIDE_SNACKBAR = 'App page/HIDE_SNACKBAR';

export default {
	...searchSuggestionsTypes,
	OPEN_DRAWER,CLOSE_DRAWER,
	SHOW_SNACKBAR,HIDE_SNACKBAR
}