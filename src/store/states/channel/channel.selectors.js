const selectChannel = (state,key)=>state[key];
const selectChannelTopics = (state)=>state.topics;


export {
	selectChannel,
	selectChannelTopics
}