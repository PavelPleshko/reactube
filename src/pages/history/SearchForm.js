import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mediaOperations from '../../store/states/media/media.operations';
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
	}
})


class SearchForm extends Component{
	
	state={
		search:'',
		dialogOpen:false
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

	confirmClearHistory = () =>{
		this.props.clearHistory();
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
		const {classes,isProcessing,historyCount,loggedIn} = this.props;
	return (
		<React.Fragment>
		<ConfirmDeleteDialog 
			confirmDelete={this.confirmClearHistory}
			closeDialog={this.closeDialog} open={this.state.dialogOpen} title="Clear history">
			Are you sure you want to clear your view history?
			This operation is irreversible.	
		</ConfirmDeleteDialog>

		<div className={classes.searchInner}>
			<TextInput adornment={<SearchIcon />} label="Search in the view history" input={{value:this.state.search,onChange:this.onChangeHandler,onKeyUp:this.handleKeyPress}}/>
		
			<div className={classes.searchActions}>
				<Button onClick={this.openDialog} className={(!loggedIn || historyCount < 1) ? classes.disabled : ''}>Clear history</Button>
				<Button className={!loggedIn ? classes.disabled : ''}>Do not save my history</Button>
			</div>
		</div>
		</React.Fragment>
	)
	}
}

const boundActionCreators = (dispatch) =>bindActionCreators({...mediaOperations},dispatch);

const mappedStateToProps = (state) =>({
  currentPage:selectCurrentPage(state.media.medias,'history'),
  pageSize:selectPageSize(state.media.medias,'history'),
});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(SearchForm));