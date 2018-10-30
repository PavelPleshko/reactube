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
		margin:'0 1em 0 0',
		display:'inline-flex',
		alignItems:'center'
		
	},
	icon:{
		fontSize:'1.6em',
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
	const {classes,mediaId,likes=[],dislikes=[],liked,disliked} = props;

	return (
		<div className={classes.root}>
			<span className={classes.evaluate}>
				<ThumbUpIcon onClick={liked} className={classes.icon}/>
				<span className={classes.counter}>{likes.length}</span>
			</span>
			<span className={classes.evaluate}>
				<ThumbDownIcon onClick={disliked} className={classes.icon}/>
				<span className={classes.counter}>{dislikes.length}</span>
			</span>
		</div>
		)
}


export default withStyles(styles)(primaryActions);