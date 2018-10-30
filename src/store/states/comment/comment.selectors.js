import {createSelector} from 'reselect';


const selectAllCommentsByMediaMemo = (state)=>{
	if(!state.data) return [];
	let byId = state.data.byId;
	let commentsArray = Object.values(byId);
	return commentsArray;
};

const selectAllCommentsByMedia = createSelector(
	selectAllCommentsByMediaMemo,
	(comments)=>comments
);

const selectIsProcessing = (state) =>state.processing;
const selectErrorText = (state)=>state.isError ? state.isError : null;



export {
	selectAllCommentsByMedia,selectIsProcessing,selectErrorText
}