import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectMedias} from '../store/states/media/media.selectors';


//meterial ui
import Grid from '@material-ui/core/Grid';


import MediaTile from '../components/core/MediaTile/MediaTile';


class Home extends Component{

	componentDidMount = () =>{
		const {popularMedias,listPopularMedia,
			continueWatchingMedias,listContinueWatchingMedia} = this.props;
		if(popularMedias.length < 1) listPopularMedia();
		if(continueWatchingMedias.length < 1) listContinueWatchingMedia();
	}
	
	render(){
		const {popularMedias,continueWatchingMedias} = this.props;
	return (
		<div style={{margin:'3rem'}}>
			<Grid container spacing={24}>
			<Grid item sm={12}>
				<MediaTile columns={6} show={12} items={popularMedias} resourceKey={'popular'} title={
					<h3>Recommended</h3>
				} />
			</Grid>		
			{(continueWatchingMedias && continueWatchingMedias.length) ? <Grid item sm={12}>
				<MediaTile columns={6} show={6} items={continueWatchingMedias} resourceKey={'popular'} title={
					<h3>Continue watching</h3>
				} />
			</Grid> : null
			}
			</Grid>
		</div>
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);
const mappedStateToProps = (state) =>({
  popularMedias:selectMedias(state.media.medias,'popular'),
  continueWatchingMedias:selectMedias(state.media.medias,'continueWatching')
});

export default connect(mappedStateToProps,boundActionCreators)(Home);