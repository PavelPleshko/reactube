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
import RelatedMedia from './singleMedia/RelatedMedia';


const styles = theme =>({
	root:{
		padding:'30px 15%',
		position:'relative'
	}


});

class SingleMedia extends Component{
	
	state = {
		autoplay:false,
	}
	loadMediaFromParams = ()=>{
		const {mediaId} = this.props.match.params;
		this.props.readMedia(mediaId);
		this.props.listRelatedMedia(mediaId);
	}

	componentDidMount = () =>{
		this.loadMediaFromParams();
		
	}

	componentDidUpdate=(prevProps)=>{
		if(this.props.match.params.mediaId != prevProps.match.params.mediaId){
			this.loadMediaFromParams();
		}
	}



	render(){
		const {classes,media,relatedMedia,user} = this.props;
	return (
		<Grid className={classes.root} container spacing={16}>
			<Grid item sm={8} xs={12}>
				<MediaPlayer media={media} user={user} />
			</Grid>
			<Grid item sm={4} xs={12}>
				<RelatedMedia data={relatedMedia} />
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