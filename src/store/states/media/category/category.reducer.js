import types from './category.types';

const initialState =  { 
	processing:false,
	isError:false,
	data:{
		allIds:[],
		byId:{}
	}
};

const categoryReducer = (state=initialState,action) => {
	const {payload,type} = action;
	switch(type){
		case types.GET_CATEGORIES_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;

		case types.GET_CATEGORIES_SUCCESS:
			let byIds = {};
		payload.forEach(item=>{
			byIds[item._id] = item
		});
			return {
				...state,
				processing:false,
				data:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}
		break;
		
		case types.GET_CATEGORIES_ERROR:
			return {
				...state,
				processing:false,
				isError:payload,
				data:null
			}
		break;
		default:
			return state;
	}
}


export default categoryReducer;