import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';

import MediaTileItem from './mediaTile/MediaTileItem';


const mediaTile = (props)=>{
	const {items,resourceName="media",resourceKey,columns=6,title,show=12} = props;
	const coefficientCol = 12/columns;
	const itemsToShow = items ? items.slice(0,show) : [];

	return (
		<Fragment>
			<div>
				{title}
			</div>
			<Grid container spacing={8}>
				
				
				{itemsToShow.map(item=>(
					<Grid item sm={coefficientCol} key={item._id} style={{height:230}} >
					
					 <MediaTileItem item={item} itemId={item._id}
					  resourceKey={resourceKey}
					   resourceName={resourceName}/>   
	              
					</Grid>
					))}
				
			</Grid>
		</Fragment>
		)
}


export default mediaTile;