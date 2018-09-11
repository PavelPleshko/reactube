const removeMedia = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.REMOVE_MEDIA_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:true
				},
				isError:{
					...state.isError,
					singleMedia:null
				}
			}
		break;	

		case types.REMOVE_MEDIA_SUCCESS:
			let newState =  {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
				all:{
					...state.all,
					allIds: state.all.allIds.filter(id=>id !== payload._id),
				},
				singleMedia:null
			}
			delete newState.all.byId[payload._id];
			return newState;
		break;

		case types.REMOVE_MEDIA_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					singleMedia:false
				},
					isError:{
					...state.isError,
					singleMedia:payload
				}
			}
		break;	
		default:
			return state;
	}	
}

export default removeMedia;