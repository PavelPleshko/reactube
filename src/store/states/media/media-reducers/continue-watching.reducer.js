import initialState from '../media.initial-state';
import types from '../media.types';

const continueWatching = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
		case types.LIST_CONTINUE_WATCHING_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					continueWatching:true
				},
				isError:{
					...state.isError,
					continueWatching:null
				}
			}
		case types.LIST_CONTINUE_WATCHING_SUCCESS:

			let items,total=0,byIds={};
			if(typeof payload === 'object'){
				items = payload.medias;
				total = payload.total;
			}else{
				items = payload;
			}
			items.forEach(item=>{
				byIds[item._id] = {...item,type:'media'};
			});
			return {
					...state,
				processing:{
					...state.processing,
					continueWatching:false
				},
				continueWatching:{
					allIds:Object.keys(byIds),
					byId:byIds
				}
			}

		case types.LIST_CONTINUE_WATCHING_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					continueWatching:false
				},
					isError:{
					...state.isError,
					continueWatching:payload
				}
			}
		default:
			return state;
	}	
}

export default continueWatching;