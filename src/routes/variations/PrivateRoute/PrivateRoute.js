import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import {connect} from 'react-redux';
import {selectIsAuthenticated} from '../../../store/states/user';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mappedStateToProps = (state) =>(
{
  isAuthenticated:selectIsAuthenticated(state.user),
}
  );


export default connect(mappedStateToProps)(PrivateRoute)