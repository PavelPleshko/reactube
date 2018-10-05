import types from './channel.types';

const initialState = {
		processing:false,
		isError:false,
		data:null,
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
		break;	

		case types.GET_CHANNELS_TOPICS_SUCCESS:
			return {
				...state,
				processing:false,
				topics:payload
			}
		break;

		case types.GET_CHANNELS_TOPICS_ERROR:
			return {
				...state,
				processing:false,
				isError:payload				
			}
		break;



		default:
			return state;
	}

	
}


export default channelReducer;