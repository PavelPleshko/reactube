import types from './app.types';

const initialState =  { 
	processing:{
		suggestions:false
	},
	isError:{
		suggestions:false
	},
	data:{
		suggestions:{
			allIds:[],
			byId:{}
		},
		drawerOpened:true,
		snackbar:{
			opened:false,
			message:null,
			variant:null
		}
	}
};

const appReducer = (state=initialState,action) => {
	const {payload,type} = action;
	switch(type){
		case types.SEARCH_SUGGESTIONS_REQUEST:
			return {
				...state,
				processing:{
					...state.processing,
					suggestions:true,
				},
				isError:{
					...state.isError,
					suggestions:null,
				},
				data:{
					...state.data,
					suggestions:null
				}
			}
		case types.SEARCH_SUGGESTIONS_SUCCESS:
			let byIds = {};
			payload.forEach(item=>{
				byIds[item._id] = item
			});
			return {
				...state,
				processing:{
					...state.processing,
					suggestions:false,
				},
				data:{
					...state.data,
					suggestions:{
						allIds:Object.keys(byIds),
						byId:byIds
					}
				}
			}
		case types.SEARCH_SUGGESTIONS_ERROR:
			return {
				...state,
				processing:{
					...state.processing,
					suggestions:false,
				},
				isError:{
					...state.isError,
					suggestions:payload,
				},
				data:{
					...state.data,
					suggestions:null
				}
			}
		case types.OPEN_DRAWER:
			return {
				...state,
				data:{
					...state.data,
					drawerOpened:true
				}
			}
		case types.CLOSE_DRAWER:
			return {
				...state,
				data:{
					...state.data,
					drawerOpened:false
				}
			}
		case types.SHOW_SNACKBAR:
			return {
				...state,
				data:{
					...state.data,
					snackbar:{
						opened:true,
						message:payload.message,
						variant:payload.variant
					}
				}
			}
		case types.HIDE_SNACKBAR:
			return {
				...state,
				data:{
					...state.data,
					snackbar:{
						...state.data.snackbar,
						opened:false,
						message:null,
						
					}
				}
			}		
		default:
			return state;
	}

	
}

export default appReducer;