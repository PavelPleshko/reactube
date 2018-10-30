import React, {Component,Fragment} from 'react';
import { renderRoutes } from 'react-router-config'
import routes from '../routeConfig';

import PrivateRoute from '../variations/PrivateRoute/PrivateRoute';

const RootRouter = ({route})=>{
	
	
	
	return (
	<Fragment>	
		{renderRoutes(routes)}
	</Fragment>

	)
	
}


export default RootRouter;