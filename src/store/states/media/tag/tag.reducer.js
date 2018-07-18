import types from './tag.types';

const initialState =  { 
	processing:false,
	isError:false,
	data:{
		allIds:[],
		byId:{}
	}
};

const tagReducer = (state=initialState,action) => {
	const {payload,type} = action;
	switch(type){
		case types.GET_TAGS_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;	
		case types.GET_TAGS_SUCCESS:
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
		case types.GET_TAGS_ERROR:
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

export default tagReducer;