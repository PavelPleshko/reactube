

const selectAllTags = (state)=>{
	let byId = state.data.byId;
	return Object.values(byId);
};
const selectIsProcessing = (state) =>state.processing;
const selectErrorText = (state)=>state.isError ? state.isError : null;



export {
	selectAllTags,selectIsProcessing,selectErrorText
}