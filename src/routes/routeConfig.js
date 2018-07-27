import Loadable from 'react-loadable';
import { read,listPopular } from '../store/states/media/media.api'; 
import Root from './RootRouter/RootRouter';
import React from 'react';
import HomeSkeleton from '../pages/home/HomeSkeleton/HomeSkeleton';
import mediaActions from '../store/states/media/media.actions';
import pMinDelay from 'p-min-delay'

const delay = promise => {
  if (typeof window === 'undefined') return promise
  return pMinDelay(promise, 1500)
}


const routes = [
		 {	
  	path:'/',
  	exact:true,
  	component:Loadable({loader:()=>delay(import('../pages/Home')),
  	loading() {
    return <HomeSkeleton />
  }}),
  	loadData:()=>listPopular(),
  	reduxAction:(data)=>mediaActions.listPopularMediaSuccess(data)

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
    path: '/media/edit/:mediaId',
    component: Loadable({
    loader:()=>import('../pages/EditMedia'),
    loading() {
    return <div>Loading...</div>
  }}
  )
  },
  {
    path: '/media/:mediaId',
    component: Loadable({loader:()=>import('../pages/SingleMedia'),loading() {
    return <div>Loading...</div>
  }}),
    loadData: (params) => read(params),
    reduxAction:(data)=>mediaActions.readMediaSuccess(data)
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
   	  loadData:route.loadData,
   	  reduxAction:route.reduxAction
    };
  });
  return mapping;
}

export default convertCustomRouteConfig(routes) 