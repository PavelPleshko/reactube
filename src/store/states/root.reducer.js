import { combineReducers } from 'redux';

import userReducer from './user';
import appReducer from './app';
import commentReducer from './comment';
import mainMediaReducer from './media';
import { reducer as formReducer } from 'redux-form';



const initialState = null;
const tokenReducer = (state=initialState,action)=>{
	return state;
}

const rootReducer = combineReducers({
 	user:userReducer,
 	media:mainMediaReducer,
 	comment:commentReducer,
 	form:formReducer,
 	csrf:tokenReducer,
 	app:appReducer
})


export default rootReducer;