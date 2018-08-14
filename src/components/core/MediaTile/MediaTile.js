import React from 'react';
import Grid from '@material-ui/core/Grid';

import MediaTileItem from './mediaTile/MediaTileItem';


const mediaTile = (props)=>{
	const {columns=4,items,resourceName="media"} = props;
	return (
		<Grid container spacing={8}>
	
			{items.map(item=>(
				<Grid item sm={2} key={item._id} style={{height:230}} >
				
                 <MediaTileItem item={item} resourceName={resourceName}/>   
              
				</Grid>
				))}

		</Grid>
		)
}


export default mediaTile;