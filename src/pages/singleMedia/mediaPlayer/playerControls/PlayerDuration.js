import React from 'react';

import {withStyles} from '@material-ui/core/styles';

import {formatDuration} from '../../../../utils/pipes/fileDataTransforms';

const styles = theme =>({
	root:{
		color:'#fff',
		position:'relative',
		margin:'auto'
	}
})

const playerDuration = (props)=>{
	const {classes,duration,played} = props;
	return (
		<span className={classes.root}>
			<time dateTime={`P${Math.round(duration * played)}S`}>
	      		{formatDuration(duration * played)}
			</time> / 
			<time dateTime={`P${Math.round(duration)}S`}>
			    {formatDuration(duration)}
			</time>
		</span>
		)
}


export default withStyles(styles)(playerDuration);