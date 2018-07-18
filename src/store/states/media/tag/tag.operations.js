import { push } from 'connected-react-router'
import {listAll} from './tag.api';
import tagActions from './tag.actions';



const getTags = () => {
	return (dispatch)=>{
		dispatch(tagActions.getTagsRequest());
		listAll()
		.then(response=>{
			let tags = response.data.tags;			
		dispatch(tagActions.getTagsSuccess(tags));
		}).catch((error) => {
			dispatch(tagActions.getTagsError(error.message));
		})	
	}
}


export {
	getTags
}