import SingleMedia from '../pages/SingleMedia'; 
import { read } from '../store/states/media/media.api'; 


const routes = [
  {
    path: '/media/:mediaId',
    component: SingleMedia,
    loadData: (params) => read(params)
  }
]
export default routes 