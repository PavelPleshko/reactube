import React from 'react';


import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import MediaTileSingle from './mediaTileHorizontal/MediaTileSingle';

const styles = theme =>({
   loader:{
     display:'flex',
     justifyContent:'center'
   }
});

const mediaTileHorizontal = (props)=>{
	const {columns=4,items,resourceName="media",classes,isProcessing} = props;
	return (
		<div>
	
			{items.map(item=>(
				<Grid container style={{marginBottom:8}} spacing={24} key={item._id} >
           <MediaTileSingle resourceName={resourceName} item={item} />
				</Grid>
				))}
 {isProcessing && 
   <div className={classes.loader}>
     <CircularProgress />
   </div>}
		</div>
		)
}


export default withStyles(styles)(mediaTileHorizontal);