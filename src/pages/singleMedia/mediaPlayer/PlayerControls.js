import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

import PlayerDuration from './playerControls/PlayerDuration';

const styles = theme => ({
  volume:{
  	display:'flex',
  	width:'20%',
  	alignItems:'center'
  },
  icon:{
  	color:'#fff',
  	opacity:'.7',
  	'&:hover':{
  		opacity:1
  	}
  },
  iconActive:{
  	color:'#fff'
  },
  sliderTrackBefore:{
  	background:'#fff',
  	height:'3px'
  },
  sliderTrackAfter:{
  	background:'#dedede',
  	height:'2px'
  },
  sliderThumb:{
  	background:'#fff'
  },
  rightControls:{
  	display:'flex',
    height: '100%',
    lineHeight: 1,
  	margin:'auto 1.5rem auto auto',
  }
})

class PlayerControls extends Component{
	

	render(){
		const {classes,nextUrl,playPause,toggleMuted,setVolume,onLoop,onClickFullscreen,
			playing,ended,volume,muted,loop,visible,played,duration} = this.props;
	return (
		<React.Fragment>
		
			<IconButton onClick={playPause}>
					    <Icon className={classes.iconActive}>{playing ? 'pause': (ended ? 'replay' : 'play_arrow')}</Icon>
			</IconButton>
			<IconButton  color="primary">
				<Link to={nextUrl}>
					<Icon className={classes.iconActive}>skip_next</Icon>
				</Link>    
			</IconButton>
			<div className={classes.volume}>
				<IconButton onClick={toggleMuted}>
					<Icon className={classes.iconActive}> {volume > 0 && !muted && 'volume_up' || 
					            muted && 'volume_off' || 
					               volume==0 && 'volume_mute'} </Icon>
				</IconButton>
				<Slider 
				       min={0} 
				       max={1} 
				       value={muted? 0 : volume} 
				       onChange={setVolume}
				       classes={{trackBefore:classes.sliderTrackBefore,
       					trackAfter:classes.sliderTrackAfter,
       					thumb:classes.sliderThumb}}
       	/>
				       </div>
			 <IconButton className={loop ? classes.iconActive : classes.icon} 
           									 onClick={onLoop}>
				<Icon>loop</Icon>
			</IconButton>
			
			<div className={classes.rightControls}>
				<PlayerDuration played={played} duration={duration}/>
				<IconButton onClick={onClickFullscreen}>
				  <Icon className={classes.iconActive}>fullscreen</Icon>
				</IconButton>		
			</div>
		</React.Fragment>
	)
	}
}


export default withStyles(styles)(PlayerControls);