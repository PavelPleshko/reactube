import React from "react";
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import {configStore,history} from './store/store';
import JssProvider from 'react-jss/lib/JssProvider';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme,MuiThemeProvider,createGenerateClassName } from '@material-ui/core/styles';
import {deepPurple,green,red} from '@material-ui/core/colors';

const generateClassName = createGenerateClassName();
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#757de8',
    main: '#3f51b5',
    dark: '#002984',
    contrastText: '#fff',
    error:red[500],
    errorHover:red[600],
    success:green[400],
    successHover:green[600],
    standard:deepPurple[500],
    standardHover:deepPurple[600],
    grey:'#8091a5',
    lightGrey:'#c3cfd5'
  }
}
});

const store = configStore();
hydrate(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		 	<JssProvider>
				<MuiThemeProvider theme={theme}>
					<App />
			   </MuiThemeProvider>
			   </JssProvider>
		</ConnectedRouter>
	</Provider>,
 document.getElementById("root"));