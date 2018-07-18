import { push } from 'connected-react-router'
import {listAll} from './category.api';
import categoryActions from './category.actions';



const getCategories = () => {
	return (dispatch)=>{
		dispatch(categoryActions.getCategoriesRequest());
		listAll()
		.then(response=>{
			let categories = response.data;			
		dispatch(categoryActions.getCategoriesSuccess(categories));
		}).catch((error) => {
			dispatch(categoryActions.getCategoriesError(error.message));
		})	
	}
}

export {
	getCategories
}