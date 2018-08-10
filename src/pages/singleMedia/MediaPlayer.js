import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import screenfull from 'screenfull'
import { findDOMNode } from 'react-dom'

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';

import MediaMeta from './mediaPlayer/MediaMeta';
import PlayerControls from './mediaPlayer/PlayerControls';
import PlayerProgress from './mediaPlayer/PlayerProgress';

const styles = theme => ({
  root:{
	display: 'inline-flex',
    flexDirection: 'column'
  },
  playerWrapper:{
   width:640,
   height:360,
   overflow: 'hidden',
   background: '#000000',
   position:'relative'
  },
  primaryDashed: {
    background: 'none',
    backgroundColor: theme.palette.secondary.main
  },

  dashed: {
    animation: 'none'
  },
  controls:{
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.6)',
    bottom:0,
    left:0,
    display:'flex',
    width:'100%',
    zIndex:10,

  },
  videoError: {
    width: '100%',
    textAlign: 'center',
    color: theme.palette.primary.light
  }
})

class MediaPlayer extends Component{

state = {
      playing: true,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      ended:false,
      playbackRate: 1.0,
      loop: false,
      fullscreen: false,
      videoError: false
} 

componentDidMount = () => {
  if (screenfull.enabled) {
     screenfull.on('change', () => {
         let fullscreen = screenfull.isFullscreen ? true : false 
         this.setState({fullscreen: fullscreen}) 
     }) 
  }
}

ref = player => {
      this.player = player
}

videoError = e => {
  this.setState({videoError: true}) 
}

playPause = () => {
     this.setState({ playing: !this.state.playing })
}

onLoop = () => {
   this.setState({ loop: !this.state.loop })
}

onEnded = () => {
    if(this.state.loop){
      this.setState({ playing: true})
    }else{
      this.props.handleAutoplay(()=>{
      	this.setState({ended:true,playing:false})
      })
    }
}

toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
}

setVolume = (e,volume) => {
    this.setState({ volume})
}

 onProgress = progress => {
    if (!this.state.seeking) {
      this.setState({played: progress.played, loaded: progress.loaded})
    }
}

onSeekMouseDown = () => {
    this.setState({ seeking: true })
}

onSeekChange = (e,value) => {
	value =  parseFloat(value);
  this.setState({ played: value, 
                    ended:value >= 1 });
  this.player.seekTo(value);
}

onSeekMouseUp = (e,value) => {
  this.setState({ seeking: false });
  this.player.seekTo(this.state.played);
}

onDuration = (duration) => {
    this.setState({ duration })
}

onClickFullscreen = () => {
   screenfull.request(findDOMNode(this.player))
}

	render(){
		const {media,classes,user,nextUrl} = this.props;
		const { playing, ended, volume, muted, loop, played, 
			loaded, duration, playbackRate, fullscreen, videoError } = this.state;

	return (media && 
		<div className={classes.root}>		
			<div  className={classes.playerWrapper}>
				<ReactPlayer 
				className={classes.reactPlayer} 
				ref={this.ref}
				url={media.video_url} 
				playing={playing}
     			loop={loop}
				playbackRate={playbackRate}
			    volume={volume}
			    muted={muted}
			    onEnded={this.onEnded}
			    onError={this.videoError}
			    onProgress={this.onProgress}
			    onDuration={this.onDuration}
			    width={fullscreen ? '100%':'inherit'}
     			height={fullscreen ? '100%':'inherit'} />
	     		<div className={classes.controls}>
	     			<PlayerProgress 
	     			played={played}
	     			loaded={loaded}
	     			onSeekMouseDown={this.onSeekMouseDown}
	     			onSeekChange={this.onSeekChange}
	     			onSeekMouseUp={this.onSeekMouseUp}
	     			/>
	          	    <PlayerControls 
	          	    	playPause={this.playPause}
	          	    	toggleMuted={this.toggleMuted}
	          	    	setVolume={this.setVolume}
	          	    	onLoop={this.onLoop}
	          	    	onClickFullscreen={this.onClickFullscreen}
	          	    	volume={volume}
	          	    	muted={muted}
	          	    	playing={playing}
	          	    	loop={loop}
	          	    	played={played}
	          	    	duration={duration}
	          	    	nextUrl={nextUrl}
	          	    />
	     		</div>
					

				
	     		{videoError && <p className={classes.videoError}>Video Error. Try again later.</p>}

          	</div>

          	<MediaMeta user={user} media={media} 
          	/>	
		</div>
					)			
	}

}


export default withStyles(styles)(MediaPlayer);