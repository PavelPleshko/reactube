const historyMediaList = (state=initialState,action)=>{
	const {type,payload} = action;
	switch(type){
		case types.LIST_HISTORY_MEDIA_REQUEST:
		case types.SEARCH_HISTORY_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					history:true
				}
			}
		break;

		case types.LIST_HISTORY_MEDIA_SUCCESS:
		case types.SEARCH_HISTORY_SUCCESS:
		let byIds = {};
		let {total,medias} = payload;
		medias.forEach(item=>{
			byIds[item._id] = item
		});
			return {
				...state,
				processing:{
					...state.processing,
					history:false
				},
				history:{
					...state.history,
					allIds:[...state.history.allIds].concat(Object.keys(byIds)),
					byId:{...state.history.byId,...byIds},
					currentPage:state.history.currentPage+1,
					total:total
				}
			}
		break
		case types.LIST_HISTORY_MEDIA_ERROR:
		case types.SEARCH_HISTORY_ERROR:
			return {
				...state,
				isError:{
					...state.isError,
					history:payload
				},
				processing:{
					...state.processing,
					history:false
				}
			}
		break;	
		default:
		return state;
	}
}

export default historyMediaList;