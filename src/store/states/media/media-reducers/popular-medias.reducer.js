const getPopularMediaList = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIST_POPULAR_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					popular:true
				},
				isError:{
					...state.isError,
					popular:null
				}
			}
		break;	

		case types.LIST_POPULAR_MEDIA_SUCCESS:
		let byIds = {};
		payload.forEach(item=>{
			byIds[item._id] = {...item,type:'popular'}
		});
			return {
				...state,
				processing:{
					...state.processing,
					popular:false
				},
				popular:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}
		break;

		case types.LIST_POPULAR_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					popular:false
				},
					isError:{
					...state.isError,
					popular:payload
				}
			}
		break;	
		default:
			return state;
	}	
}

export default getPopularMediaList;