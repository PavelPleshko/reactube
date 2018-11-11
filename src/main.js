import React from "react";
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import {configStore,history} from './store/store';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss'
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import {deepPurple,green,red} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#fff',
    active: 'rgb(50,97,195)',
    textColor:'#c8c8c8',
    contrastText: '#000',
    error:red[500],
    errorHover:red[600],
    success:green[400],
    successHover:green[600],
    standard:deepPurple[500],
    standardHover:deepPurple[600],
    grey:'#8091a5',
    mediumGrey:'#eeeeee',
    lightGrey:'#f8f8f8',
  }
},
 typography:{
    fontFamily:'Roboto Condensed, sans-serif'
  }
});


const store = configStore();

const rootElement =  document.getElementById("root");

    render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <JssProvider>
                <MuiThemeProvider theme={theme}>
                    <App />
               </MuiThemeProvider>
               </JssProvider>
        </ConnectedRouter>
    </Provider>
    ,
 rootElement);

