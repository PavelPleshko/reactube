import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import PrivateRoute from '../variations/PrivateRoute/PrivateRoute';

//components
import Signup from '../../pages/Signup';
import Signin from '../../pages/Signin';
import Home from '../../pages/Home';
import NewMedia from '../../pages/NewMedia';
import SingleMedia from '../../pages/SingleMedia';
import EditMedia from '../../pages/EditMedia';

class RootRouter extends Component{
	
	
	render(){

	return (		
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/signup" component={Signup} />
			<Route path="/signin" component={Signin} />
			<Route path="/add/media" component={NewMedia} />
			<Route path="/media/edit/:mediaId" component={EditMedia}/>
			<Route path="/media/:mediaId" component={SingleMedia} />
			
		</Switch>

	)
	}
}


export default RootRouter;