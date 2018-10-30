import React, {Component} from 'react';

//material ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectMedias} from '../store/states/media/media.selectors';

import MediaTileHorizontal from '../components/core/MediaTileHorizontal/MediaTileHorizontal';


const styles = theme =>({
	notFound:{
		textAlign:'center',
		color:theme.palette.primary.grey,
		fontSize:'1.1rem'
	}


});

class SearchPage extends Component{
	
	state = {
		
	}


	componentDidMount = () =>{
		
	}




	render(){
		const {classes,filteredMedias} = this.props;

	return (
			<Grid item sm={7} xs={12}>
				{filteredMedias && filteredMedias.length>0 ? 
					<MediaTileHorizontal items={filteredMedias} /> :
					<div className={classes.notFound}>No results found. Try other keywords</div>
				}
			</Grid>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  filteredMedias:selectMedias(state.media.medias,'all'),
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(SearchPage));