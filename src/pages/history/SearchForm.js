import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/CheckCircle';
import Checkbox from '@material-ui/core/Checkbox';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mediaOperations from '../../store/states/media/media.operations';
import * as userOperations from '../../store/states/user/user.operations';
import {selectCurrentPage,selectPageSize} from '../../store/states/media/media.selectors';
import {selectUser} from '../../store/states/user/user.selectors';

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
	changesSaved:{
		display:'inline-flex',
		alignItems:'center',
		fontSize:'.7rem',
		position:'relative',
		color:theme.palette.primary.success,
		padding:'0 16px',
		transform:'translateX(-50%)',
		opacity:0,
		transition:'.2s ease-in'
	},
	showSaved:{
		opacity:1,
		transform:'translateX(0)'
	},
	icon:{
		marginLeft:'.5rem'
	}
})

class SearchForm extends Component{	
	state={
		search:'',
		dialogOpen:false,
		notSaveHistory:false,
		changesSaved:false
	}
	
	componentDidMount = () =>{
		const {user} = this.props;
		const {notSaveHistory} = this.state;
		this.profileForm = new FormData();
		if(user && !user.saveHistory != notSaveHistory){
			this.setState({notSaveHistory:!user.saveHistory})
		}
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

	handleSaveHistoryChange = (e)=>{
		this.setState(({notSaveHistory})=>{
			const saveHistory = !notSaveHistory == true ? false : true;
			this.profileForm.set('saveHistory',saveHistory);
			this.props.updateUser(this.profileForm);
			setTimeout(()=>{
				this.setState({changesSaved:false});
			},3000)
			return {notSaveHistory:!notSaveHistory,changesSaved:true};
		});
	}

	render(){
		const {classes,historyCount,loggedIn} = this.props;
		const {notSaveHistory,changesSaved} = this.state;
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
				<div>
				<div className={(!loggedIn || historyCount < 1) ? classes.disabled : ''}>
          			<Button onClick={this.handleSaveHistoryChange} className={!loggedIn ? classes.disabled : ''}>
          			Do not save my history</Button>
          				
          			<Checkbox id="saveHistory" checked={notSaveHistory}
          			onChange={this.handleSaveHistoryChange} color="primary" />
          		</div>
          		<div className={[classes.changesSaved,changesSaved ? classes.showSaved : ''].join(' ')}>Changes saved <CheckIcon className={classes.icon} /></div>
          		</div>
			</div>
		</div>
		</React.Fragment>
	)
	}
}

const boundActionCreators = (dispatch) =>bindActionCreators({...mediaOperations,...userOperations},dispatch);

const mappedStateToProps = (state) =>({
  currentPage:selectCurrentPage(state.media.medias,'history'),
  pageSize:selectPageSize(state.media.medias,'history'),
  user:selectUser(state.user)
});

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(SearchForm));