import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Prompt } from 'react-router';
import { isDirty } from 'redux-form';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initialize} from 'redux-form';

import * as categoryOperations from '../store/states/media/category/category.operations';
import * as tagOperations from '../store/states/media/tag/tag.operations';
import * as mediaOperations from '../store/states/media/media.operations';


import {getDirectUploadDetails} from '../store/states/media/media.api';
import FileUploader from './newmedia/FileUploader';


class NewMedia extends Component{
	
	state={
		upload_details:null,
		redirect_to_login:false,
	};



	componentDidMount(){
		getDirectUploadDetails({resourceType:'video'}).then(res=>{
			if(res.data){
				this.setState({upload_details:res.data});
			}else{
				this.setState({redirect_to_login:true});	
			}
		})

		this.props.getCategories();
		this.props.getTags();

	}

	submitFormHandler=(mediaForm)=>{
		this.props.createMedia(mediaForm);
	}



	render(){
		const {formDirty} = this.props;

		if(this.state.redirect_to_login){
			return <Redirect to="/signin" />
		}
	return (
		<div>
		 <Prompt
      key='block-nav'
      when={formDirty}
      message='You have unsaved changes, are you sure you want to leave?'
    />
		<FileUploader submitForm={this.submitFormHandler} uploadDetails={this.state.upload_details} categories={this.props.categories} />
		</div>
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations,
	...categoryOperations,...tagOperations},dispatch);
const mapStateToProps = (state)=>{
	let formDirty = isDirty('mediaInfo')(state);
	return {formDirty};
}

export default connect(mapStateToProps,boundActionCreators)(NewMedia);