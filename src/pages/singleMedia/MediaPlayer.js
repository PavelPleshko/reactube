import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';

import ReactPlayer from 'react-player';

import MediaMeta from './mediaPlayer/MediaMeta';

const styles = theme => ({
  root:{
	display: 'inline-flex',
    flexDirection: 'column'
  },
  flex:{
    display:'flex'
  },

  playerWrapper:{
   width:640,
   height:360,
   overflow: 'hidden',
   background: '#000000'
  },
  primaryDashed: {
    background: 'none',
    backgroundColor: theme.palette.secondary.main
  },
  primaryColor: {
    backgroundColor: '#6969694f'
  },
  dashed: {
    animation: 'none'
  },
  controls:{
    position: 'relative',
    backgroundColor: '#ababab52'
  },
  rangeRoot: {
    position: 'absolute',
    width: '100%',
    top: '-7px',
    zIndex: '3456',
    '-webkit-appearance': 'none',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  videoError: {
    width: '100%',
    textAlign: 'center',
    color: theme.palette.primary.light
  }
})

const mediaPlayer = (props)=>{
const {media,classes,user} = props;

	return (media && 
		<div className={classes.root}>		
			<div  className={classes.playerWrapper}>
				<ReactPlayer className={classes.reactPlayer} url={media.video_url} controls width={'100%'}
				height={'100%'} />
          	</div>
          	<MediaMeta user={user} media={media} />	
		</div>
					)			
}


export default withStyles(styles)(mediaPlayer);