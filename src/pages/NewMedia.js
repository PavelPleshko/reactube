import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


import {getDirectUploadDetails} from '../store/states/media/media.api';
import FileUploader from './newmedia/FileUploader/FileUploader';


class NewMedia extends Component{
	
	state={
		upload_details:null,
		redirect_to_login:false
	};

	componentDidMount(){
		getDirectUploadDetails({resource_type:'video'}).then(res=>{
			if(res.data){
				console.log(res.data);
				this.setState({upload_details:res.data});
			}else{
				this.setState({redirect_to_login:true});	
			}
		})
	}
	
	render(){

		if(this.state.redirect_to_login){
			return <Redirect to="/signin" />
		}
	return (
		<div>
		<FileUploader uploadDetails={this.state.upload_details} />
		</div>
	)
	}
}


export default NewMedia;