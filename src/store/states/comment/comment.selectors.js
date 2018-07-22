

const selectAllCommentsByMedia = (state)=>{
	if(!state.data) return [];
	let byId = state.data.byId;
	let commentsArray = Object.values(byId);
	return commentsArray;
};

const selectIsProcessing = (state) =>state.processing;
const selectErrorText = (state)=>state.isError ? state.isError : null;



export {
	selectAllCommentsByMedia,selectIsProcessing,selectErrorText
}