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
		if(this.props.popularMedias.length < 1) this.props.listPopularMedia();
	}
	
	render(){
		const {popularMedias} = this.props;
	return (
		<Grid container spacing={24}>
		<Grid item sm={12}>
			<MediaTile columns={4} items={popularMedias} resourceKey={'popular'}/>
		</Grid>
		</Grid>
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);
const mappedStateToProps = (state) =>(
{
  popularMedias:selectMedias(state.media.medias,'popular'),
}
  );

export default connect(mappedStateToProps,boundActionCreators)(Home);