import { combineReducers } from 'redux';

import userReducer from './user';
import mainMediaReducer from './media';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
 	user:userReducer,
 	media:mainMediaReducer,
 	form:formReducer
})


export default rootReducer;