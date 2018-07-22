import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './states/root.reducer';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createMemoryHistory,createBrowserHistory } from 'history'

let history;
if (typeof(window) !== 'undefined'){
    history = createBrowserHistory();
}
else {
    history = createMemoryHistory();
}

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

