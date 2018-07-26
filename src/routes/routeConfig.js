import Loadable from 'react-loadable';
import { read } from '../store/states/media/media.api'; 
import Root from './RootRouter/RootRouter';
import React from'react';

const routes = [
		 {	
  	path:'/',
  	exact:true,
  	component:Loadable({loader:()=>import('../pages/Home'),loading() {
    return <div>Loading...</div> //put simple loader here
  }})
  },
  {
  	path:'/signup',
  	component:Loadable({loader:()=>import('../pages/Signup'),loading() {
    return <div>Loading...</div>
  }})
  },
  {
  	path:'/signin',
  	component:Loadable({loader:()=>import('../pages/Signin'),loading() {
    return <div>Loading...</div>
  }})
  },
  {
  	path:'/add/media',
  	component:Loadable({loader:()=>import('../pages/NewMedia'),loading() {
    return <div>Loading...</div>
  }})
  },
  {
    path: '/media/:mediaId',
    component: Loadable({loader:()=>import('../pages/SingleMedia'),loading() {
    return <div>Loading...</div>
  }}),
    loadData: (params) => read(params)
  },
	]

 





export const convertCustomRouteConfig = (routes, parentRoute) => {
  return routes.map((route) => {
    const pathResult = typeof route.path === 'function' ? route.path(parentRoute || '') : `${parentRoute || ''}/${route.path}`;
    return {
      path: pathResult.replace('//', '/'),
      component: route.component,
      exact: route.exact,
      routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : [],
   	  loadData:route.loadData
    };
  });
  return mapping;
}

console.log(convertCustomRouteConfig(routes));
export default convertCustomRouteConfig(routes) 