import createActionStrings from '../utils/create-action-strings';

const createMediaTypes = createActionStrings('CREATE_MEDIA','Newmedia page');
const listPopularMediaTypes = createActionStrings('LIST_POPULAR_MEDIA','Home page');
const listUserMediaTypes = createActionStrings('LIST_USER_MEDIA','Profile page');
const listRelatedMediaTypes = createActionStrings('LIST_RELATED_MEDIA','Single media page');
const listHistoryMediaTypes = createActionStrings('LIST_HISTORY_MEDIA','History media page');
const listWatchLaterMediaTypes = createActionStrings('LIST_WATCHLATER_MEDIA','Watch later media page');
const listMediaByChannelTypes = createActionStrings('LIST_MEDIA_BY_CHANNEL','Channel page');
const listContinueWatchingTypes = createActionStrings('LIST_CONTINUE_WATCHING','Home page');
const readMediaTypes = createActionStrings('READ_MEDIA','Single media page');
const removeMediaTypes = createActionStrings('REMOVE_MEDIA','Single media page');
const updateMediaTypes = createActionStrings('UPDATE_MEDIA','Edit media page');
const likeMediaTypes = createActionStrings('LIKE_MEDIA','Single media page');
const dislikeMediaTypes = createActionStrings('DISLIKE_MEDIA','Single media page');
const searchMediaTypes = createActionStrings('SEARCH_MEDIA','Main nav search');
const searchHistoryTypes = createActionStrings('SEARCH_HISTORY','History page search');
const searchWatchLaterTypes = createActionStrings('SEARCH_WATCHLATER','Watchlater page search');

const REPLACE_MEDIA_FROM_LIST = 'Single media page autoplay/REPLACE_MEDIA_FROM_LIST';
const RESET_HISTORY_LIST = 'History page search/RESET_HISTORY_LIST';

export default {
	...createMediaTypes,
	...listPopularMediaTypes,
	...listUserMediaTypes,
	...listRelatedMediaTypes,
	...listHistoryMediaTypes,
	...listWatchLaterMediaTypes,
	...listMediaByChannelTypes,
	...listContinueWatchingTypes,
	...readMediaTypes,
	...searchMediaTypes,
	...searchHistoryTypes,
	...updateMediaTypes,
	...removeMediaTypes,
	...likeMediaTypes,
	...dislikeMediaTypes,
	...searchWatchLaterTypes,
	REPLACE_MEDIA_FROM_LIST,
	RESET_HISTORY_LIST
}