import React, {Component} from 'react';
import classNames from 'classNames';
import PropTypes from 'prop-types';

//materialui
import FileUpload from '@material-ui/icons/FileUpload';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import UploadProgress from './UploadProgress/UploadProgress';
import FileMetaForm from '../FileMetaForm/FileMetaForm';
import DialogWithType from '../../../components/UI/dialogs/DialogWithType/DialogWithType';
import {uploadVideo} from '../../../store/states/media/media.api';

const styles = theme =>({
	root:{
		margin:'auto',
		maxWidth: '70%',
		marginTop: theme.spacing.unit * 5,
	},
	card:{
		padding:'1.5rem 2.5rem',
		textAlign:'center'
	},
	cardContent:{
		position:'relative',
		minHeight:'350px'
	},
	caption:{
		position:'absolute',
		left:'50%',
		top:'50%',
		transform:'translateX(-50%) translateY(-50%)',
		display:'flex',
		flexDirection:'column',
		textAlign:'center',
		alignItems: 'center'
	},
	uploadIcon:{
		fontSize:'14rem',
		color:theme.palette.primary.light,
		opacity:'.2',
		
	},
	
	btnIcon:{
		marginRight:'.4rem'
	},
	
	input:{
		display:'none'
	},
	chooseFile:{
		marginBottom:'.4rem',
		fontWeight:'700',
		'&:hover':{
			color:theme.palette.primary.light,
			cursor:'pointer'
		}
	},
	fileName:{
		marginTop:'.7rem'
	}
});

class FileUploader extends Component{
	
	state={
		file:'',
		progress:0,
		loading:false,
		video_url:'',
		error:'',
		status:'disabled',
		dialogOpened:false
	};
	
	handleChange = event =>{
		 this.setState({ file: event.target.files[0],status:'active'})
	}

	updateProgress = (e)=>{
			let progress = Math.round((e.loaded/e.total)*100);
   			this.setState({progress:progress,loading:progress==100 ? false : true})
	}

	startUploading = async ()=>{
		await this.setState({loading:true,status:'loading'})
		let file  = this.state.file;
		let upload_link = this.props.uploadDetails.upload_link;
		let preset = this.props.uploadDetails.cloud_preset;
		let fd = new FormData();
		fd.append('file', file);
		fd.append('upload_preset',preset);
  	    uploadVideo(fd,upload_link,this.updateProgress).then(data=>{
  	    	let secure_url = data.secure_url;
  	    	this.setState({video_url:secure_url,status:'success'});
  	    }).catch(error=>{
  	    	this.setState({error:error,status:'error',dialogOpened:true});
  	    });
	}

	closeDialog = () =>{
		this.setState({dialogOpened:false});
	}

	render(){
		const {classes} = this.props;
	return (
		<React.Fragment>
				<DialogWithType 
				open={!!(this.state.error && this.state.dialogOpened)}
				close={this.closeDialog}
				title="Error"
				type="error"
				actionBtnText="Dismiss">
					{this.state.error}
				</DialogWithType>
				<Grid container spacing={24} className={classes.root}>
					<Grid item xs={8}>
						<Card>
							<CardContent className={classes.cardContent}>
								<div className={classes.caption}>
									
									
										{this.state.video_url  ? (<video width="320" height="240" controls>
		  <source src={this.state.video_url} type="video/mp4" />

		Your browser does not support the video tag.
		</video>): <FileUpload className={classes.uploadIcon}/>}
										<label htmlFor="icon-button-file">
											<Typography color="textSecondary" 
											variant="subheading" className={classes.chooseFile}>
											{this.state.file ? 'Click to select another file' : 'Click to select a file'}
											</Typography>
										</label>
									 <input accept="video/*" onChange={this.handleChange}
		        	     				className={classes.input} id="icon-button-file" type="file" />
		        	       		



		<UploadProgress progress={this.state.progress} startUploading={this.startUploading}
		 status={this.state.status} />

							            <span className={classes.fileName}>
							            	{this.state.file ? this.state.file.name : ''}
							            </span>
								</div>

							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<FileMetaForm />
					</Grid>
				</Grid>
			</React.Fragment>
	)
	}
}


FileUploader.propTypes = {
  uploadDetails: PropTypes.object
};

export default withStyles(styles)(FileUploader);