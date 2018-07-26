import React,{Component,Fragment} from 'react';
import { hot } from 'react-hot-loader';

import RootRouter from './routes/RootRouter/RootRouter';
import MainNav from './components/core/MainNav/MainNav';



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
			            <MainNav />
                        <div style={{margin:'7rem 4rem 4rem 4rem'}}>
                           <RootRouter />
                       </div>
			 </Fragment>
 				)
}
}

export default hot(module)(App);