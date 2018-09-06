

const selectData = (state,key)=>{
	if(!state.data || !state.data[key]) return [];
	let byId = state.data[key].byId;
	let data = Object.values(byId);
	return data;
};

const selectSliceOfData =(state,key) => {
	return state.data[key];
}

const selectIsProcessing = (state,key) =>state.processing[key];
const selectErrorText = (state,key)=>state.isError[key] ? state.isError[key] : null;

const selectDrawerOpened = (state) =>state.data ? state.data.drawerOpened : false;


export {
	selectData,selectIsProcessing,selectErrorText,selectSliceOfData,

	selectDrawerOpened
}