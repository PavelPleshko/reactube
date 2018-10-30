import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import Slider from '@material-ui/lab/Slider';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
	root:{
		position:'absolute',
		width:'100%'
	},
	progressBuffer:{
		background:'black'
	},
	slider:{
		position: 'absolute',
        minWidth: '100%',
        top: 3,
        zIndex: '999',
        left:0,
        padding:0
	},
	sliderTrack:{
		height:'7px'
	},
	trackAfter:{
		background:'transparent'
	}

})

const playerProgress = (props)=>{
	const {classes,played,loaded,onSeekMouseDown,onSeekChange,onSeekMouseUp,onSeekClick} = props;
	return (
		<div className={classes.root}>
		<LinearProgress color="primary" variant="buffer" 
                value={played*100} valueBuffer={loaded*100} 
                style={{width: '100%',position:'absolute', height:'6px'}} 
               	classes={{bar1Buffer:classes.progressBuffer}}
		/>
		<Slider
	   min={0} max={1}
       value={played}
       onDragStart={onSeekMouseDown}
       onChange={onSeekChange}
       onDragEnd={onSeekMouseUp}
       classes={{root:classes.slider,track:classes.sliderTrack,
       	trackAfter:classes.trackAfter}}
		/>
		</div>
		)
}


export default withStyles(styles)(playerProgress);