const selectChannel = (state,key)=>state[key];
const selectChannelTopics = (state)=>state.topics;
const selectChannelMedias = state => state.single && state.single.medias;

export {
	selectChannel,
	selectChannelTopics,
	selectChannelMedias
}