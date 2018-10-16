import React,{Component,Fragment} from 'react';
import { hot } from 'react-hot-loader';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import RootRouter from './routes/RootRouter/RootRouter';
import MainNav from './components/core/MainNav/MainNav';
import DrawerNav from './components/core/DrawerNav/DrawerNav';
import Snackbar from './components/core/Notifications/Snackbar/Snackbar';

import {selectSliceOfData} from './store/states/app';
import * as appOperations from './store/states/app/app.operations';
import * as userOperations from './store/states/user/user.operations';

class App extends Component{
componentDidMount() {
    this.props.checkSession();
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

onSnackBarClose = () =>{
  const {hideSnackbar} = this.props;
  hideSnackbar();
}

render(){
  const {snackbarState,drawerOpened} = this.props;
  let {message='',opened=false,variant} = snackbarState;
  variant = !variant ? 'success' : variant;

	return (	
        <Fragment>
    			   <Snackbar 
              open={opened}
              variant={variant}
              message={message}
              onClose={this.onSnackBarClose} />
              <DrawerNav>
                <MainNav />
                  
                      <RootRouter />
                    
              </DrawerNav>
			  </Fragment>
 				)
}
}

const mapStateToProps = (state) => ({
  snackbarState:selectSliceOfData(state.app,'snackbar'),
  drawerOpened:true,
  router:state.router
})

const boundActionCreators = (dispatch) => bindActionCreators({...appOperations,...userOperations},dispatch);


export default hot(module)
        (connect(mapStateToProps,boundActionCreators)(App));