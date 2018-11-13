import initialState from '../media.initial-state';
import types from '../media.types';

const continueWatching = (state=initialState,action) => {
	const { type, payload } = action;
	switch(type){
	
		default:
			return state;
	}	
}

export default continueWatching;