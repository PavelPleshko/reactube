import React, {Component} from 'react';

//material ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectSingleMedia,selectMedias} from '../store/states/media/media.selectors';
import {selectUser} from '../store/states/user/user.selectors';

import MediaPlayer from './singleMedia/MediaPlayer';
import MediaList from './singleMedia/MediaList';
import Autoplay from './singleMedia/Autoplay';
import CommentList from './singleMedia/CommentList';


const styles = theme =>({
	root:{
		padding:'0 10%',
		position:'relative'
	}


});

class SingleMedia extends Component{
	
	state = {
		autoplay:false,
	}
	loadMedia = (mediaId,isParamChanged)=>{
		this.props.readMedia(mediaId);
		// if(isParamChanged)
		this.props.listRelatedMedia(mediaId);
	}

	componentDidMount = () =>{
		const {mediaId} = this.props.match.params;
		this.loadMedia(mediaId,true);	
	}

	componentDidUpdate=(prevProps)=>{
		let {mediaId} = this.props.match.params;

		let isParamChanged = mediaId != prevProps.match.params.mediaId;
		let isMediaChanged = prevProps.media && this.props.media && 
			this.props.media._id != prevProps.media._id;
			if(isMediaChanged) mediaId = this.props.media._id;
		if( isParamChanged || isMediaChanged){
			this.loadMedia(mediaId,isParamChanged);
		}
	}

	handleAutoplay = (updateMediaControls) =>{
		let {autoplay} = this.state;
		let playlist = this.props.relatedMedia;
		let media = playlist[0];
		if(!autoplay || playlist.length == 0)
		return updateMediaControls();

	if(playlist.length > 1){
		this.props.replaceMediaFromPlaylist(media._id);
	}else{
		this.props.listRelatedMedia(media._id);
	}
	}

	autoPlayChangeHandler = (e) =>{
		this.setState({autoplay:e.target.checked})
	}



	render(){
		const {classes,media,relatedMedia,user} = this.props;
		const nextUrl = relatedMedia.length > 0
          ? `/media/${relatedMedia[0]._id}` : ''
	return (
		<Grid className={classes.root} container spacing={24}>
			<Grid item sm={7} xs={12}>
				<MediaPlayer media={media} user={user} nextUrl={nextUrl} handleAutoplay={this.handleAutoplay} /> 
				{media && <CommentList mediaId={media._id}/>}
			</Grid>
			<Grid item sm={5} xs={12}>
				<MediaList data={relatedMedia} title="Up next">
					<Autoplay autoPlay={this.state.autoplay} autoplayChange={this.autoPlayChangeHandler}/>
				</MediaList>
			</Grid>
		</Grid>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  media:selectSingleMedia(state.media.medias),
  relatedMedia:selectMedias(state.media.medias,'related'),
  user:selectUser(state.user)
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(SingleMedia));