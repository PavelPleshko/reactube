import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../store/states/media/media.operations';
import * as userOperations from '../store/states/user/user.operations';
import {selectMedias,selectCurrentPage,
	selectIsProcessing,noMoreItems,selectPageSize,selectTotal} from '../store/states/media/media.selectors';
import * as userSelectors from '../store/states/user/user.selectors';


//meterial ui
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';


import MediaTileHorizontal from '../components/core/MediaTileHorizontal/MediaTileHorizontal';
import SearchForm from './watchlater/SearchForm';
import InfiniteScroll from '../components/UI/miscellaneous/InfiniteScroll/InfiniteScroll';


const styles = theme =>({
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


class WatchLater extends Component{
	state={
		searched:null
	}

	componentDidMount = () =>{
		if(this.props.loggedIn){
			let {currentPage,pageSize,watchlaterMedias,listWatchlaterMedia} = this.props;
		 	if(watchlaterMedias.length < 1) listWatchlaterMedia(currentPage,pageSize);
		}
	}


	listWatchlaterMedia = () =>{
		const {currentPage,pageSize,searchWatchlater,listWatchlaterMedia} = this.props;
		const {searched} = this.state;
		if(searched){
			searchWatchlater(currentPage,pageSize);
		}else{
			listWatchlaterMedia(currentPage,pageSize);
		}
	}

	 setRootRef = (element) => {
	    this.rootRef = element;
	 }

	 changeSearched = (searched) =>{
	 	this.setState({searched});
	 }

	render(){
		const {classes,watchlaterMedias,loggedIn,
			isProcessing,noMoreItems,itemsRequested,total} = this.props;
	return (
		<Grid container spacing={24}>
			<Grid item sm={12}>
				<h3>My watchlist
					{loggedIn && <span className={classes.total}>
						(<strong>{total}</strong> in total)
					</span>}
				</h3>
				
			</Grid>
			<Grid item sm={7}>
				<div ref={this.setRootRef}>
					{loggedIn ? (watchlaterMedias && watchlaterMedias.length ? 
						<InfiniteScroll 
							refContainer={this.rootRef}
							callback={this.listWatchlaterMedia}
							stop={noMoreItems}
							requested={itemsRequested} >
								<MediaTileHorizontal items={watchlaterMedias} 
								isProcessing={itemsRequested}/>
						</InfiniteScroll> : 
					<div> You didn't add anything to watch list </div>) : 
					<div>
					You have to be logged in to view watchlist. 
					<Link to="/signin">Log in</Link>
					</div>}
				</div>
			</Grid>
			<Grid item sm={3} className={classes.search}>
				<SearchForm 
				changeSearched={this.changeSearched}
				loggedIn={loggedIn} 
				itemsCount={watchlaterMedias && watchlaterMedias.length}
				/>
			</Grid>
		</Grid>
	)
	}
}

const boundActionCreators = (dispatch) =>bindActionCreators({...mediaOperations,...userOperations},dispatch);
const mappedStateToProps = (state) =>({
  watchlaterMedias:selectMedias(state.media.medias,'watchlater'),
  currentPage:selectCurrentPage(state.media.medias,'watchlater'),
  pageSize:selectPageSize(state.media.medias,'watchlater'),
  total:selectTotal(state.media.medias,'watchlater'),
  itemsRequested:selectIsProcessing(state.media.medias,'watchlater'),
  noMoreItems:noMoreItems(state.media.medias,'watchlater'),
  loggedIn:userSelectors.selectIsAuthenticated(state.user),
  isProcessing:userSelectors.selectIsProcessing(state.user),
});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(WatchLater));