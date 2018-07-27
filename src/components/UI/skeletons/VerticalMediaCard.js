import React from 'react';

import GridListTile from '@material-ui/core/GridListTile';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
	imgPlaceholder:{
		height:130,
		width:'100%',
		background:theme.palette.primary.lightGrey,
		borderRadius:'3px'
	},
	titlePlaceholder:{
		height:20,
		width:'80%',
		background:theme.palette.primary.lightGrey,
		borderRadius:'3px',
		margin:'5px 0'
	},
	subtitlePlaceholder:{
		height:15,
		width:'70%',
		background:theme.palette.primary.lightGrey,
		borderRadius:'3px',
		margin:'5px 0'
	}

})

const verticalMediaCard = (props)=>{
	const {classes} = props;
	return (
		<GridListTile>
					
                    
                 <div className={classes.imgPlaceholder}>
                
                 </div>    
                 <div className={classes.titlePlaceholder}>
                
                 </div>
                 <div className={classes.subtitlePlaceholder}>
                
                 </div>
              
				</GridListTile>
		)
}


export default withStyles(styles)(verticalMediaCard);