import React from 'react';

import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
	root: {
    	 width: '100%',
   		 display: 'inline-flex',
   		 marginTop:'5px'
 	 },
	imgPlaceholder:{
		height:120,
		width:170,
		background:theme.palette.primary.lightGrey,
		borderRadius:'3px'
	},
	details:{
		flex: '1 0 auto',
		padding:'0 5px'
	},
	titlePlaceholder:{
		height:20,
		width:'80%',
		background:theme.palette.primary.lightGrey,
		borderRadius:'3px',
		marginBottom:'5px'
	},
	subtitlePlaceholder:{
		height:15,
		width:'70%',
		background:theme.palette.primary.lightGrey,
		borderRadius:'3px',
		margin:'5px 0'
	}

})

const horizontalMediaCard = (props)=>{
	const {classes} = props;
	return (
		<div className={classes.root}>                    
                 <div className={classes.imgPlaceholder}>              
                 </div>   

                 <div className={classes.details}>
	                 <div className={classes.titlePlaceholder}>
	                 </div>
	                 <div className={classes.subtitlePlaceholder}>               
	                 </div>
                 </div>            
		</div>
		)
}


export default withStyles(styles)(horizontalMediaCard);