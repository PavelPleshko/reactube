import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectMedias} from '../store/states/media/media.selectors';


//meterial ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';


import MediaTile from '../components/core/MediaTile/MediaTile';
import MediaList from './singleMedia/MediaList';

const styles = theme =>({
	root:{
		margin:`3rem`
	}
})
class Home extends Component{
	
	componentDidMount = () =>{
		this.props.listPopularMedia();
	}
	
	render(){
		const {classes,popularMedias} = this.props;
	return (
		<Grid container spacing={24} className={classes.root}>
		<Grid item sm={8}>
			<MediaTile columns={4} items={popularMedias}/>
		</Grid>
		<Grid item sm={4}>
			
			<MediaList data={popularMedias}/>
			
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

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Home));