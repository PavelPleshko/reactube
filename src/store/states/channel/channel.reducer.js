import types from './channel.types';

const initialState = {
		processing:false,
		isError:false,
		data:null,
		single:null,
		topics:[]
	};

const channelReducer = (state=initialState,action) => {
	const {type,payload} = action;

	switch(type){
		case types.GET_CHANNELS_TOPICS_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}

		case types.GET_CHANNELS_TOPICS_SUCCESS:
			return {
				...state,
				processing:false,
				topics:payload
			}

		case types.GET_CHANNELS_TOPICS_ERROR:
			return {
				...state,
				processing:false,
				isError:payload				
			}

		case types.CREATE_NEW_CHANNEL_REQUEST:
			return {
				...state,
				processing:false,
				isError:payload				
			}

		case types.CREATE_NEW_CHANNEL_SUCCESS:
			return {
				...state,
				processing:false,
				single:payload				
			}

		case types.CREATE_NEW_CHANNEL_ERROR:
			return {
				...state,
				processing:false,
				isError:payload				
			}	
		case types.GET_CHANNEL_BY_SLUG_REQUEST:
			return {
				...state,
				processing:false,
				isError:payload				
			}

		case types.GET_CHANNEL_BY_SLUG_SUCCESS:
			return {
				...state,
				processing:false,
				single:payload				
			}

		case types.GET_CHANNEL_BY_SLUG_ERROR:
			return {
				...state,
				processing:false,
				isError:payload				
			}




		default:
			return state;
	}

	
}


export default channelReducer;