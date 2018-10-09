import React from 'react';
import Grid from '@material-ui/core/Grid';

import MediaTileItem from './mediaTile/MediaTileItem';


const mediaTile = (props)=>{
	const {items,resourceName="media",resourceKey,columns=6} = props;
	const coefficientCol = 12/columns;
	return (
		<Grid container spacing={8}>
	
			{items.map(item=>(
				<Grid item sm={coefficientCol} key={item._id} style={{height:230}} >
				
				 <MediaTileItem item={item} itemId={item._id}
				  resourceKey={resourceKey}
				   resourceName={resourceName}/>   
              
				</Grid>
				))}

		</Grid>
		)
}


export default mediaTile;