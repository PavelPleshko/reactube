import { createStore, applyMiddleware } from 'redux';
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

const getInitialState = ()=>{
	if (typeof window !== 'undefined' && window.__APP_STATE) {	
		let state= window.__APP_STATE;
		delete state.router; //to disable redirect to base href
		delete window.__APP_STATE;
		let initialScriptDom = document.getElementById('initialState');
		initialScriptDom.parentNode.removeChild(initialScriptDom);
    return state;
  }
  return null;
}



const configStore =  function(defaultState=getInitialState()){

const store  = createStore(connectRouter(history)(rootReducer),
defaultState,
	applyMiddleware(
		thunk,
		routerMiddleware(history)
		)
	);	

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

