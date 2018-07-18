import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './states/root.reducer';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();


const configStore =  function(defaultState){

const store  = createStore(connectRouter(history)(rootReducer),
defaultState,compose(
	applyMiddleware(
		thunk,
		routerMiddleware(history)
		)
	));	

if(module.hot){
	module.hot.accept(()=>{
		const nextRootReducer = rootReducer;
		store.replaceReducer(nextRootReducer);
	})
}
return store;
}


export {
	configStore,history
}

