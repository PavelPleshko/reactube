import React, {Component} from 'react';
// import {Route,Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from '../routeConfig';

import PrivateRoute from '../variations/PrivateRoute/PrivateRoute';

//components

import EditMedia from '../../pages/EditMedia';

const RootRouter = ({route})=>{
	
	
	
	return (
	<div>	
	{renderRoutes(routes)}
	</div>

	)
	
}


export default RootRouter;