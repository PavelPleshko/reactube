import React,{Component,Fragment} from 'react';
import { hot } from 'react-hot-loader';

import RootRouter from './routes/RootRouter/RootRouter';
import MainNav from './components/core/MainNav/MainNav';
import DrawerNav from './components/core/DrawerNav/DrawerNav';



class App extends Component{
componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

render(){
	return (	
            <Fragment>
			  
          <DrawerNav>
            <MainNav />
                <div style={{margin:'3rem'}}>
                  <RootRouter />
                </div>
          </DrawerNav>
			 </Fragment>
 				)
}
}

export default hot(module)(App);