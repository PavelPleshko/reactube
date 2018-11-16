import createActionStrings from '../utils/create-action-strings';

const getChannelsTopicsTypes = createActionStrings('GET_CHANNELS_TOPICS','Create channel modal');
const getUserSubscriptionsTypes = createActionStrings('GET_USER_SUBSCRIPTIONS','Sidedrawer');
const createNewChannelTypes = createActionStrings('CREATE_NEW_CHANNEL','Create channel modal');
const getChannelBySlugTypes = createActionStrings('GET_CHANNEL_BY_SLUG','Create channel modal');
const getChannelMediaTypes = createActionStrings('GET_CHANNEL_MEDIA','Channel page');
const updateChannelTypes = createActionStrings('UPDATE_CHANNEL','Channel page');
const subscribeToChannelTypes = createActionStrings('SUBSCRIBETO_CHANNEL','Channel page');
const unsubscribeFromChannelTypes = createActionStrings('UNSUBSCRIBEFROM_CHANNEL','Channel page');

export default {
	...getChannelsTopicsTypes,
	...getUserSubscriptionsTypes,
	...createNewChannelTypes,
	...getChannelBySlugTypes,
	...getChannelMediaTypes,
	...updateChannelTypes,
	...subscribeToChannelTypes,
	...unsubscribeFromChannelTypes
}