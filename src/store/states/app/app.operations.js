import {getSearchSuggestions} from './app.api';
import appActions from './app.actions';

const getSuggestions = (input) => {
	return (dispatch)=>{
		dispatch(appActions.searchSuggestionsRequest());
		getSearchSuggestions({input})
		.then(response=>{
			console.log(response);
			let suggestions = response.data.suggestions;			
		dispatch(appActions.searchSuggestionsSuccess(suggestions));
		}).catch((error) => {
			dispatch(appActions.searchSuggestionsError(error.message));
		})	
	}
}




export {
	getSuggestions
}