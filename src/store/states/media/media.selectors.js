const selectMedias = (state,key)=>{
	let byId = state[key].byId;
	let allIds = state[key].allIds;
	return allIds.map(id=>byId[id]);
	}

const selectIsProcessing = (state,key) =>state.processing[key];

const selectCurrentPage = (state,key) =>state[key].currentPage;

const selectTotal = (state,key) =>state[key].total;

const selectPageSize = (state,key) =>state[key].pageSize;

const noMoreItems = (state,key) =>state[key].currentPage*state[key].pageSize>=state[key].total;

const selectErrorText = (state,key)=>state.isError[key] ? state.isError[key] : null;

const selectSingleMedia = (state)=>state.singleMedia;

const selectNextInTheList = (state,key)=>{
	return state[key];
}

export {
	selectMedias,selectIsProcessing,
	selectErrorText,selectSingleMedia,
	selectCurrentPage,selectTotal,noMoreItems,selectPageSize
}