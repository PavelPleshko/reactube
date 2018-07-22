import React,{Component} from 'react';
import { hot } from 'react-hot-loader';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import {deepPurple,green,red} from '@material-ui/core/colors';

import RootRouter from './routes/RootRouter/RootRouter';

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

class App extends Component{
render(){
	return (	
			    <MuiThemeProvider theme={theme}>
                   <RootRouter />
			    </MuiThemeProvider>
 				)
}
}

export default hot(module)(App);