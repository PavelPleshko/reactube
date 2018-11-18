import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import * as userOperations from '../store/states/user/user.operations';
import {selectMedias,selectCurrentPage,
		selectIsProcessing,noMoreItems,
		selectPageSize,selectTotal} from '../store/states/media/media.selectors';
import * as userSelectors from '../store/states/user/user.selectors';

import InfiniteScroll from '../components/UI/miscellaneous/InfiniteScroll/InfiniteScroll';


//meterial ui
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';


import MediaTileHorizontal from '../components/core/MediaTileHorizontal/MediaTileHorizontal';
import SearchForm from './history/SearchForm';


const styles = theme =>({
	root:{
		padding:'1.5rem 4rem'
	},
	search:{
		backgroundColor:'rgba(0,0,0,.04)',
		height:'100%',
		width:'100%',
		position:'fixed',
		top:0,
		right:0,
	},
	total:{
		color:theme.palette.primary.grey,
		fontSize:'.8rem',
		margin:'0 .5rem',
		fontWeight:400
	}
})

class History extends Component{

	state={
		searched:null
	}


	componentDidMount = () =>{
	 if(this.props.loggedIn){
	 	const {historyMedias} = this.props;
			if(historyMedias.length < 1) this.fetchHistoryMedias();
	 }
	}

	componentDidUpdate = (prevProps) => {
		const {historyMedias,loggedIn} = this.props;
		const wasLoggedIn = prevProps.loggedIn;
		if(!wasLoggedIn && loggedIn && historyMedias.length < 1){
			this.fetchHistoryMedias();
		}
	}
	
	clearHistory = () =>{	
		this.props.clearHistory();
	}

	fetchHistoryMedias = () =>{
		const {currentPage,pageSize,listHistoryMedia} = this.props;
		listHistoryMedia(currentPage,pageSize);
	}



	listHistoryMedia = () =>{
		const {currentPage,pageSize,searchHistory,listHistoryMedia} = this.props;
		const {searched} = this.state;
		if(searched){
			searchHistory(searched,currentPage,pageSize);
		}else{
			listHistoryMedia(currentPage,pageSize);
		}
	}

	 setRootRef = (element) => {
	    this.rootRef = element;
	 }

	 changeSearched = (searched) =>{
	 	this.setState({searched});
	 }

	render(){
		const {classes,historyMedias,loggedIn,isProcessing,itemsRequested,total,noMoreItems,location} = this.props;

	return (
		<Grid container spacing={24} className={classes.root}>
		<Grid item sm={12}>
			<h3>Medias that you viewed 
			{loggedIn && <span className={classes.total}>
				(<strong>{total}</strong> in total)
			</span>}
			</h3>
			
		</Grid>
		<Grid item sm={7}>
		
		<div ref={this.setRootRef}>
			{loggedIn ? (historyMedias && historyMedias.length ? 
				<InfiniteScroll
				 refContainer={this.rootRef}
				 callback={this.listHistoryMedia}
				 stop={noMoreItems}
				 requested={itemsRequested}
				 >
				<MediaTileHorizontal items={historyMedias} isProcessing={itemsRequested}/>
				</InfiniteScroll> : 
			<div> Your view history is empty </div>) : 
			<div>
			You have to be logged in to view history. 
			<Link to={{pathname:"/signin",from: location.pathname}}>Log in</Link>
			</div>}
		</div>
		

		</Grid>
		<Grid item sm={3} className={classes.search}>
			<SearchForm 
			changeSearched={this.changeSearched}
			loggedIn={loggedIn} 
			historyCount={historyMedias && historyMedias.length}
			 />
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
  total:selectTotal(state.media.medias,'history'),
  itemsRequested:selectIsProcessing(state.media.medias,'history'),
  noMoreItems:noMoreItems(state.media.medias,'history'),
  loggedIn:userSelectors.selectIsAuthenticated(state.user),
  isProcessing:userSelectors.selectIsProcessing(state.user),

});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(History));