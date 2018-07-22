import types from './comment.types';

const initialState =  { 
	processing:false,
	isError:false,
	data:{
		allIds:[],
		byId:{}
	}
};

const commentReducer = (state=initialState,action) => {
	const {payload,type} = action;
	switch(type){
		case types.GET_COMMENTS_REQUEST:
			return {
				...state,
				processing:true,
				isError:null,
				data:null
			}
		break;	
		case types.GET_COMMENTS_SUCCESS:
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
		case types.GET_COMMENTS_ERROR:
			return {
				...state,
				processing:false,
				isError:payload,
				data:null
			}
		break;

		case types.POST_COMMENT_REQUEST:
			return {
				...state,
				processing:true,
				isError:null
			}
		break;	
		case types.POST_COMMENT_SUCCESS:
			return  {
				...state,
				processing:false,
				data:{
					allIds:[...state.data.allIds,payload._id],
					byId:{
						...state.data.byId,
						[payload._id]:payload
					}
				}
			}
		break;
		case types.POST_REPLY_SUCCESS:
			return  {
				...state,
				processing:false,
				data:{
					...state.data,
					byId:{
						...state.data.byId,
						[payload.parent]:{
							...state.data.byId[payload.parent],
							repliesCount:state.data.byId[payload.parent].repliesCount+1,
							children:[...state.data.byId[payload.parent].children,payload]
						}
					}
				}
			}
		break;
		case types.POST_COMMENT_ERROR:
			return {
				...state,
				processing:false,
				isError:payload
			}
		break;

		case types.GET_REPLIES_BY_COMMENT_REQUEST:
			return  {
				...state,
				processing:true,
			}
		break;
		case types.GET_REPLIES_BY_COMMENT_SUCCESS:
			return  {
				...state,
				processing:false,
				data:{
					...state.data,
					byId:{
						...state.data.byId,
						[payload.commentId]:{
							...state.data.byId[payload.commentId],
							children:payload.replies
						}
					}
				}
			}
		break;
		default:
			return state;
	}

	
}

export default commentReducer;