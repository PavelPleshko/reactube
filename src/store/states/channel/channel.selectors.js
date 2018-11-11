const selectChannel = (state,key)=>state[key];
const selectChannelTopics = (state)=>state.topics;
const selectChannelMedias = state => state.single && state.single.medias;
const selectSubscribedChannels = state => state.subscriptions;
const selectProcessing = (state,key) => state.processing;

export {
	selectChannel,
	selectChannelTopics,
	selectChannelMedias,
	selectSubscribedChannels,
	selectProcessing
}