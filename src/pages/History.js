import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import {selectMedias} from '../store/states/media/media.selectors';
import {selectIsAuthenticated} from '../store/states/user/user.selectors';


//meterial ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


import MediaTileHorizontal from '../components/core/MediaTileHorizontal/MediaTileHorizontal';
import SearchForm from './history/SearchForm';


const styles = theme =>({
	search:{
		backgroundColor:'rgba(0,0,0,.04)',
		height:'100%',
		width:'100%',
		position:'fixed',
		top:0,
		right:0,
	}
})


class HistoryPage extends Component{



	componentDidMount = () =>{
		if(this.props.loggedIn){
			if(this.props.historyMedias.length < 1) this.props.listHistoryMedia();
		}
	}
	


	render(){
		const {classes,historyMedias,loggedIn} = this.props;
	return (
		<Grid container spacing={24}>
		<Grid item sm={12}>
			<h3>Medias that you viewed</h3>
		</Grid>
		<Grid item sm={7}>
			{loggedIn ? (historyMedias && historyMedias.length ? <MediaTileHorizontal items={historyMedias}/> : 
			<div> Your view history is empty </div>) : 
			<div>You have to be logged in to view history</div>}
		</Grid>
		<Grid item sm={3} className={classes.search}>
			<SearchForm />
		</Grid>
		</Grid>
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);
const mappedStateToProps = (state) =>({
  historyMedias:selectMedias(state.media.medias,'all'),
  loggedIn:selectIsAuthenticated(state.user)
});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(HistoryPage));