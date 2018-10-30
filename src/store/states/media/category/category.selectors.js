

export const selectAllCategories = (state)=>{
	let byId = state.data.byId;
	return Object.values(byId);
};
export const selectIsProcessing = (state) =>state.processing;
export const selectErrorText = (state)=>state.isError ? state.isError : null;