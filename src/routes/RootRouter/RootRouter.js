import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config'
import routes from '../routeConfig';

import PrivateRoute from '../variations/PrivateRoute/PrivateRoute';

const RootRouter = ({route})=>{
	
	
	
	return (
	<div>	
	{renderRoutes(routes)}
	</div>

	)
	
}


export default RootRouter;