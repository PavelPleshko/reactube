

const selectMedias = (state,key)=>{
	let byId = state[key].byId;
	return Object.values(byId);
	}
const selectIsProcessing = (state,key) =>state.processing[key];
const selectErrorText = (state,key)=>state.isError[key] ? state.isError[key] : null;
const selectSingleMedia = (state)=>state.singleMedia;

export {
	selectMedias,selectIsProcessing,
	selectErrorText,selectSingleMedia
}