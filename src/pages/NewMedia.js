import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


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
		getDirectUploadDetails({resource_type:'video'}).then(res=>{
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
		if(this.state.redirect_to_login){
			return <Redirect to="/signin" />
		}
	return (
		<div>
		<FileUploader submitForm={this.submitFormHandler} uploadDetails={this.state.upload_details} categories={this.props.categories} />
		</div>
	)
	}
}

const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations,
	...categoryOperations,...tagOperations},dispatch);


export default connect(null,boundActionCreators)(NewMedia);