import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import {configStore,history} from './store/store';
import { ConnectedRouter } from 'connected-react-router';

const store = configStore();
render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		<App />
		</ConnectedRouter>
	</Provider>,
 document.getElementById("root"));