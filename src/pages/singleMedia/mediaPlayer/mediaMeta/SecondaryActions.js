import React,{Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mediaOperations from '../../../../store/states/media/media.operations';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import ConfirmDeleteDialog from '../../../../components/UI/dialogs/ConfirmDeleteDialog/ConfirmDeleteDialog';


class SecondaryActions extends Component{

	state = {
		dialogOpen:false
	}

	openDialog = () =>{
		this.setState({dialogOpen:true})
	}

	closeDialog = () =>{
		this.setState({dialogOpen:false})
	}

	deleteResource = () =>{
		this.props.removeMedia(this.props.mediaId);
	}

	render(){
			const {mediaId,mediaTitle} = this.props;
	return (
		<ListItemSecondaryAction>
						        <Link to={"/media/edit/" + mediaId}>
						          <IconButton aria-label="Edit" color="primary">
						            <Edit/>
						          </IconButton>
						        </Link>
						         <IconButton  onClick={this.openDialog} aria-label="Delete" color="secondary">
						      		  <Delete />
						        </IconButton>
						        <ConfirmDeleteDialog open={this.state.dialogOpen}
						         closeDialog={this.closeDialog}
						         resourceTitle={mediaTitle} 
						         confirmDelete={this.deleteResource} />						       
		</ListItemSecondaryAction>
		)
	}

}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations},dispatch);

export default connect(null,boundActionCreators)(SecondaryActions);