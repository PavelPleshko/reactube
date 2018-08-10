import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectMedias} from '../store/states/media/media.selectors';


//meterial ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import MediaTile from '../components/core/MediaTile/MediaTile';
import MediaList from './singleMedia/MediaList';


class History extends Component{

	componentDidMount = () =>{
		if(this.props.historyMedias.length < 1) this.props.listHistoryMedia();
	}
	
	render(){
		const {classes,historyMedias} = this.props;
	return (
		<Grid container spacing={24}>
		<Grid item sm={12}>
			<h3>Medias that you viewed</h3>
		</Grid>
		<Grid item sm={12}>
			<MediaTile columns={4} items={historyMedias}/>
		</Grid>
		</Grid>
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);
const mappedStateToProps = (state) =>(
{
  historyMedias:selectMedias(state.media.medias,'all'),
}
  );

export default connect(mappedStateToProps,boundActionCreators)(History);