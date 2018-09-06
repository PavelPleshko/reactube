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


const toggleDrawer = () => {
	return (dispatch,getState)=>{
		let opened = getState().app.data.drawerOpened;
		if(opened){
			dispatch(appActions.closeDrawer());
		}else{
			dispatch(appActions.openDrawer());
		}
	}
}

const closeDrawer = () => {
	return (dispatch)=>{	
			dispatch(appActions.closeDrawer());
	}
}

const openDrawer = () => {
	return (dispatch)=>{	
			dispatch(appActions.openDrawer());
	}
}


const showSnackbar = ({message,variant}) =>{
	return dispatch=>{
		dispatch(appActions.showSnackbar(message,variant))
	}
}

const hideSnackbar = () =>{
	return dispatch=>{
		dispatch(appActions.hideSnackbar())
	}
}

export {
	getSuggestions,
	toggleDrawer,
	closeDrawer,openDrawer,
	showSnackbar,hideSnackbar
}