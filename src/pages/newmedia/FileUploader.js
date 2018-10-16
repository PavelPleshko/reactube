import React, {Component} from 'react';
import PropTypes from 'prop-types';

//materialui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { change } from 'redux-form';

import UploadProgress from './fileUploader/UploadProgress';
import FileMetaForm from './FileMetaForm';
import FileInformation from './fileUploader/FileInformation';
import AdjustThumbnail from './fileUploader/AdjustThumbnail';
import FileActions from './fileUploader/FileActions';
import DialogWithType from '../../components/UI/dialogs/DialogWithType/DialogWithType';
import {uploadVideo} from '../../store/states/media/media.api';


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
		position:'relative',
		display:'flex',
		flexDirection:'column',
		textAlign:'center',
		alignItems: 'center',
				fontFamily:theme.typography.mainFont

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
		fontFamily:theme.typography.mainFont,
		'&:hover':{
			color:theme.palette.primary.active,
			cursor:'pointer'
		}
	},
	fileName:{
		marginTop:'.3rem',
		fontSize:'.8rem',
		fontFamily:theme.typography.mainFont
	},
	fileActions:{
		    bottom: 10,
		    position: 'absolute',
		    right: 20,
		    zIndex:5
	}
});

class FileUploader extends Component{
	
	state={
		file:'',
		progress:0,
		loading:false,
		video:'',
		thumb_url:'',
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
		await this.setState({loading:true,status:'loading',progress:0})
		let file  = this.state.file;
		let upload_link = this.props.uploadDetails.upload_link;
		let preset = this.props.uploadDetails.cloud_preset;
		let fd = new FormData();
		fd.append('file', file);
		fd.append('upload_preset',preset);
  	    uploadVideo(fd,upload_link,this.updateProgress).then(data=>{
  	    	let video = data;
  	    	this.props.dispatch(change('mediaInfo', 'video_url', video.secure_url));
  	    	this.props.dispatch(change('mediaInfo', 'duration', video.duration));
  	    	
  	    	this.setState({video,status:'success'});  	
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
								<div className={classes.fileActions}>
									<FileActions />
								</div>
								<div className={classes.caption}>
									  <span className={classes.fileName}>
							            	{this.state.file && <div>Filename: 
							            		<strong>{this.state.file.name}</strong></div>}
							            </span>
									<AdjustThumbnail video={this.state.video} />
										
										<label htmlFor="icon-button-file">
											<Typography color="textSecondary" 
											variant="subheading" className={classes.chooseFile}>
											{this.state.status !== 'finished' && (this.state.file ? 'Click to select another file' : 'Click to select a file')}
											</Typography>
										</label>
									 <input accept="video/*" onChange={this.handleChange}
		        	     				className={classes.input} id="icon-button-file" type="file" />
		        	       		



		<UploadProgress progress={this.state.progress} startUploading={this.startUploading}
		 status={this.state.status} />

							          
								</div>

							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						{this.state.video && <FileInformation file={this.state.video} />}
						<FileMetaForm submitForm={this.props.submitForm} submitBtnText="Publish media" />
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