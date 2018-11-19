const selectChannel = (state,key)=>state[key];
const selectChannelTopics = (state)=>state.topics;
const selectChannelMedias = state => state.single && state.single.medias;
const selectSubscribedChannels = state => state.subscriptions;
const selectProcessing = (state,key) => state.processing;
const selectRandom = (state,key) => {
	const dataArr = state[key] || [];
	const len = dataArr.length;
	const idx = Math.floor(Math.random() * len);
	return dataArr[idx];
}
export {
	selectChannel,
	selectChannelTopics,
	selectChannelMedias,
	selectSubscribedChannels,
	selectProcessing,
	selectRandom
}