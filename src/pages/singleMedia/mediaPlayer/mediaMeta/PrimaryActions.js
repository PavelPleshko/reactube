import React from 'react';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
	root:{
		display:'inline-block',
	},
	evaluate:{
		color:'rgba(18,18,18,.4)',
		margin:'0 1rem',
		display:'inline-flex',
		alignItems:'center'
		
	},
	icon:{
		fontSize:'1.6rem',
		'&:hover':{
			color:'rgba(18,18,18,.6)',
			cursor:'pointer',
			transition:'.2s'
		}
	},
	counter:{
		marginLeft:'.3rem'
	}
})

const primaryActions = (props)=>{
	const {classes} = props;

	return (
		<div className={classes.root}>
			<span className={classes.evaluate}>
				<ThumbUpIcon  className={classes.icon}/>
				<span className={classes.counter}>5</span>
			</span>
			<span className={classes.evaluate}>
				<ThumbDownIcon className={classes.icon}/>
				<span className={classes.counter}>15</span>
			</span>
		</div>
		)
}


export default withStyles(styles)(primaryActions);