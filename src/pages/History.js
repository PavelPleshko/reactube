import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import * as userOperations from '../store/states/user/user.operations';
import {selectMedias,selectCurrentPage,
	selectIsProcessing,noMoreItems,selectPageSize} from '../store/states/media/media.selectors';
import * as userSelectors from '../store/states/user/user.selectors';


//meterial ui
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';


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

const gap = 50;


class History extends Component{

	componentDidMount = () =>{
		if(this.props.loggedIn){
			let {currentPage,pageSize,historyMedias,listHistoryMedia} = this.props;
			if(historyMedias.length < 1) listHistoryMedia(currentPage,pageSize);
			window.addEventListener('scroll', this.handleScroll, false);
		}
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll',this.handleScroll);
	}
	
	clearHistory = () =>{	
		this.props.clearHistory();
	}

	handleScroll = () =>{
		const {listHistoryMedia,currentPage,pageSize,itemsRequested,noMoreItems} = this.props;
		const { innerHeight, scrollY } = window;
		const { offsetTop, scrollHeight } = this.rootRef;
		if (
      (innerHeight + scrollY > (offsetTop + scrollHeight - gap)) &&
      !itemsRequested && !noMoreItems
    ) {
      listHistoryMedia(currentPage,pageSize);
    }
	}

	 setRootRef = (element) => {
	    this.rootRef = element;
	 }

	render(){
		const {classes,historyMedias,loggedIn,isProcessing} = this.props;
	return (
		<Grid container spacing={24}>
		<Grid item sm={12}>
			<h3>Medias that you viewed</h3>
		</Grid>
		<Grid item sm={7}>
		<div ref={this.setRootRef}>
			{loggedIn ? (historyMedias && historyMedias.length ? <MediaTileHorizontal items={historyMedias}/> : 
			<div> Your view history is empty </div>) : 
			<div>You have to be logged in to view history</div>}
		</div>
		</Grid>
		<Grid item sm={3} className={classes.search}>
			<SearchForm clearHistory={this.clearHistory} 
			loggedIn={loggedIn} 
			historyCount={historyMedias && historyMedias.length}
			isProcessing={isProcessing}/>
		</Grid>
		</Grid>
	)
	}
}

const boundActionCreators = (dispatch) =>bindActionCreators({...mediaOperations,...userOperations},dispatch);
const mappedStateToProps = (state) =>({
  historyMedias:selectMedias(state.media.medias,'history'),
  currentPage:selectCurrentPage(state.media.medias,'history'),
  pageSize:selectPageSize(state.media.medias,'history'),
  itemsRequested:selectIsProcessing(state.media.medias,'history'),
  noMoreItems:noMoreItems(state.media.medias,'history'),
  loggedIn:userSelectors.selectIsAuthenticated(state.user),
  isProcessing:userSelectors.selectIsProcessing(state.user),

});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(History));