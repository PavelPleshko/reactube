

const selectData = (state,key)=>{
	if(!state.data || !state.data[key]) return [];
	let byId = state.data[key].byId;
	let data = Object.values(byId);
	return data;
};

const selectIsProcessing = (state) =>state.processing;
const selectErrorText = (state)=>state.isError ? state.isError : null;



export {
	selectData,selectIsProcessing,selectErrorText
}