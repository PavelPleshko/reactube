import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

//components
import Signup from '../Signup';
import Signin from '../Signin';
import NewMedia from '../NewMedia';

class RootRouter extends Component{
	
	
	render(){

	return (

		
		<Switch>
			<Route path="/signup" component={Signup} />
			<Route path="/signin" component={Signin} />
			<Route path="/add/media" component={NewMedia} />
		</Switch>

	)
	}
}


export default RootRouter;