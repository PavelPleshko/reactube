import React,{Component} from 'react';
import { hot } from 'react-hot-loader';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import {deepPurple,green,red} from '@material-ui/core/colors';
import {BrowserRouter} from 'react-router-dom';

import RootRouter from './pages/RootRouter/RootRouter';
import MainNav from './components/core/MainNav/MainNav';

const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#757de8',
    main: '#3f51b5',
    dark: '#002984',
    contrastText: '#fff',
    error:red[500],
    errorHover:red[600],
    success:green[500],
    successHover:green[600],
    standard:deepPurple[500],
    standardHover:deepPurple[600]
  }
}
});

class App extends Component{
render(){
	return (	
			    <MuiThemeProvider theme={theme}>
			       <MainNav />
             <RootRouter />
			    </MuiThemeProvider>
 				)
}
}

export default hot(module)(App);