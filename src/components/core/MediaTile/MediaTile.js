import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';

import MediaTileItem from './mediaTile/MediaTileItem';
import LinearProgress from '@material-ui/core/LinearProgress';

const mediaTile = (props)=>{
	const {items,resourceName="media",resourceKey,columns=6,title,show=12,withTimeline=false} = props;
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
					{withTimeline && <LinearProgress color="secondary" variant="determinate" value={(item.fromTime/item.duration)*100} /> }
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