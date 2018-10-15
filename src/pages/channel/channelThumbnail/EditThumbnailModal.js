import React, {Component,Fragment} from 'react';

//meterial ui
import ImageIcon from '@material-ui/icons/Image';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Slider from '@material-ui/lab/Slider';
import {withStyles} from '@material-ui/core/styles';

import AvatarEditor from 'react-avatar-editor'

import FileInfoTable from '../../../components/core/Tables/FileInfoTable/FileInfoTable';

const ZOOM_STEP = 0.1;
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;

function dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}


const styles = theme => ({
	  modal: {
    position: 'absolute',
    top:'50%',
    left:'50%',
    minWidth:'30%',
    transform:'translate(-50%,-50%)',
    borderRadius:7,
    overflow:'hidden',
    boxShadow: theme.shadows[5],
    outline:'none',
    backgroundColor:'#fff'
  },
    modalHeader:{
  	position:'relative',
  	display:'flex',
  	justifyContent:'space-between',
  	alignItems:'center',
  	top:0,
  	left:0,
  	color:'rgba(0, 0, 0, .7)',
  	fontWeight:700,
  	padding:'1rem 1.5rem',
  	
  },
  modalBody:{
  	    padding: theme.spacing.unit * 2
  	      },
  modalFooter:{
  	backgroundColor: '#f6eded',
    padding: '.5rem 1.5rem',
  	display:'flex',
  	justifyContent:'flex-end'
  },
  thumbnailPreview:{
  	position:'relative',
  	left:'50%',
  	margin:5,
  	transform:'translateX(-50%)',
  	display:'flex',
  	alignItems:'center',
  	justifyContent:'center',
  	height:140,
  	width:140,
  },
  thumbnailBackground:{
  	  	backgroundColor:'rgba(0,0,0,.1)',
  	  		width:'100%',
		height:'100%',
		display:'flex',
  	alignItems:'center',
  	justifyContent:'center',
  	  	borderRadius:5,
  },
	channelThumnbnail:{
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		position:'relative',
		width:'7rem',
		height:'7rem',
		backgroundColor:theme.palette.primary.lightGrey
	},
	iconNoPhoto:{
		color:'#fff',
		fontSize:'4rem',
		opacity:.8
	},
	thumbInputLabel:{
		position:'relative',
		padding:'.3rem .7rem',
		borderRadius:4,
		display: 'inline-block',
		color:'rgba(0, 0, 0, 0.54)',
		backgroundColor:'transparent',
		transition:'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		fontSize:'.9rem',
		'&:hover':{
			backgroundColor:'rgba(63, 81, 181, 0.08)',
			cursor:'pointer'
		}
	},
	sliderGroup:{
		padding:'0 3.5rem',
		display: 'flex',
		flexGrow: 1,
		alignItems:'center'
	},
	sliderThumb:{
		backgroundColor:'#fff',
		boxShadow:'1px 1px 2px 1px rgba(0,0,0,.4)'
	},
	sliderTrackAfter:{
		backgroundColor:'rgba(0,0,0,.4)'
	},
	sliderButton:{
		cursor:'pointer',
		color:'rgba(0,0,0,.3)',
		fontSize:'.9rem',
		'&:hover':{
			color:'rgba(0,0,0,.6)',
		}
	}
});

class EditThumbnailModal extends Component{
		state = {
		submitted:false,
		dataUrl:null,
		scale:1
	}

	componentDidMount = () => {
		this.formData = new FormData();
	}

	fileChosenHandler = (e) => {
		const iconImage = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(iconImage);
		reader.onload = ()=>{
			 const {result} = reader;
			 this.setState({ file: iconImage,dataUrl:result});				 
		}
	}

	resetState = () => {
		this.setState({file:null,submitted:false,dataUrl:null});
	}

	updateThumbnail = () => {
		const {updateResource,processing} = this.props;
		const {file} = this.state;
		if(!processing){
			if(file){
				const dataURL = this.editor.getImage().toDataURL();
				const fileBlob = dataURItoBlob(dataURL);
				this.formData.set('iconImage',fileBlob);
				this.setState({submitted:true},()=>updateResource(this.formData));		
			}
		}
	}

	componentDidUpdate = (nextProps,nextState) => {
		if(nextState.submitted){
			const {processing} = this.props;
			if(!processing){
				this.closeModal();
			}
		}
	}

	handleScaleChange = (e,value) => {
		this.setState({scale:value});
	}

	zoomOut = () => {
		const {scale} = this.state;
		const adjustedScale= scale - ZOOM_STEP;
		if(adjustedScale >= ZOOM_MIN){
			this.setState({scale:adjustedScale});			
		}
	}	


	zoomIn = () => {
		const {scale} = this.state;
		const adjustedScale= scale + ZOOM_STEP;
		if(adjustedScale <= ZOOM_MAX){
			this.setState({scale:adjustedScale});			
		}
	}

	closeModal = () => {
		this.props.closeModal();
	}

	setEditorRef = (editor) => this.editor = editor
	
	render(){

		const {file,submitted,dataUrl,scale} = this.state;
		const {classes,processing,modalOpened} = this.props;

		return (
			 <Modal
          aria-labelledby="edit-channel-thumbnail"
          aria-describedby="edit-channel-thumbnail"
          open={modalOpened}
   		  onClose={this.closeModal}
        >
			<div className={classes.modal}>
				<div className={classes.modalHeader}>Edit Thumbnail
						<label htmlFor="thumbnail-file" className={classes.thumbInputLabel}>
							{file ? 'Choose another file' : 'Choose file'}
						</label>
						<input type="file" accept="image/*" hidden onChange={this.fileChosenHandler} id="thumbnail-file" />
					</div>
				<div className={classes.modalBody}>
				
				
				<div className={classes.thumbnailPreview}>
					{dataUrl ? 
						<AvatarEditor
						 ref={this.setEditorRef}
						 image={dataUrl} scale={scale} width={120} height={120} border={20} />
						: <div className={classes.thumbnailBackground}>
							<ImageIcon className={classes.iconNoPhoto} style={{fontSize:'6rem'}} />
						</div>
						}
				</div>
				{file && <Fragment>
						<FileInfoTable file={file} />					
					</Fragment>}

				</div>
					<div className={classes.modalFooter}>
						<div className={classes.sliderGroup}>
											 <RemoveIcon onClick={this.zoomOut} className={classes.sliderButton} />
											 <Slider classes={{thumb:classes.sliderThumb,
												trackAfter:classes.sliderTrackAfter}} value={scale} 
												min={ZOOM_MIN} max={ZOOM_MAX} step={ZOOM_STEP} onChange={this.handleScaleChange} />
											 <AddIcon onClick={this.zoomIn} className={classes.sliderButton} />
						</div>
						<Button variant="outlined" color="primary" 
						onClick={this.updateThumbnail}>{processing && submitted ?
						 'Saving...' : 'Save'}</Button>
						</div>
			</div>
        </Modal>
			)
	}
}

export default withStyles(styles)(EditThumbnailModal);