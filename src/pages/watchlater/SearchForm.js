import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mediaOperations from '../../store/states/media/media.operations';
import * as userOperations from '../../store/states/user/user.operations';
import {selectCurrentPage,selectPageSize} from '../../store/states/media/media.selectors';

import TextInput from '../../components/UI/controls/TextInput/TextInput';
import ConfirmDeleteDialog from '../../components/UI/dialogs/ConfirmDeleteDialog/ConfirmDeleteDialog';

const styles = theme =>({
	searchInner:{
		padding:'5rem 2rem'
	},
	searchActions:{
		marginTop:'1.5rem'
	},
	disabled:{
		opacity:.6,
		pointerEvents:'none'
	},
	formLabelText:{
		order:0
	},
	formLabelRoot:{
		marginLeft:0
	},
	icon:{
		marginLeft:'.5rem'
	}
})

class SearchForm extends Component{	
	state={
		search:'',
		dialogOpen:false,
		changesSaved:false
	}

	onChangeHandler = (e) =>{
		this.setState({search:e.target.value})
	}

	openDialog = () =>{
		this.setState({dialogOpen:true});
	}

	closeDialog = () =>{
		this.setState({dialogOpen:false});
	}

	confirmClearWatchlist = () =>{
	//	this.props.clearHistory();
		this.closeDialog();
	}

	handleKeyPress = (e) =>{
		const {search} = this.state;
		const {changeSearched,searchHistory,currentPage,pageSize} = this.props;
		 if(e.keyCode == 13 && search.length > 4){
            searchHistory(search,currentPage-1,pageSize);
            changeSearched(search);
         }		
	}


	render(){
		const {classes,itemsCount,loggedIn} = this.props;
	return (
		<React.Fragment>
		<ConfirmDeleteDialog 
			confirmDelete={this.confirmClearWatchlist}
			closeDialog={this.closeDialog} open={this.state.dialogOpen} title="Clear history">
			Are you sure you want to clear your watchlist?
			This operation is irreversible.	
		</ConfirmDeleteDialog>

		<div className={classes.searchInner}>
			<TextInput adornment={<SearchIcon />} label="Search in the view history" 
			input={{value:this.state.search,onChange:this.onChangeHandler,onKeyUp:this.handleKeyPress}}/>
		
			<div className={classes.searchActions}>
				<Button onClick={this.openDialog} className={(!loggedIn || itemsCount < 1) ? 
					classes.disabled : ''}>Clear watchlist</Button>
				<div>
          		</div>
			</div>
		</div>
		</React.Fragment>
	)
	}
}

const boundActionCreators = (dispatch) =>bindActionCreators({...mediaOperations,...userOperations},dispatch);

const mappedStateToProps = (state) =>({
  currentPage:selectCurrentPage(state.media.medias,'watchlater'),
  pageSize:selectPageSize(state.media.medias,'watchlater')
});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(SearchForm));