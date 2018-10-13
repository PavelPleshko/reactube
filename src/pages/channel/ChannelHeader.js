import React, {Component,Fragment} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';


import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const styles = theme => ({
	profileMeta:{
		display:'flex',
		position:'relative',
		justifyContent:'space-between',
		alignItems:'center',
		padding:'1rem 2rem',
		backgroundColor:'#fafafa'
	},
		editBackgroundIcon:{
		position:'absolute',
		top:0,
		right:0
	},
		  modal: {
    position: 'absolute',
    top:'50%',
    left:'50%',
    minWidth:'50%',
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
  	 minHeight:300,
  	width:'90%',
  },
  backgroundWrapper:{
  	width:600,
  	height:300,
  	overflow:'hidden'
  },
  dashed:{
  		border:'3px dashed #dedede'
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
	}
});
class ChannelHeader extends Component{

		state = {
		submitted:false,
		dataUrl:null,
		modalOpened:false,
		crop:{
			  x: 0,
			  y: 0,
			  aspect:16/9,
			  width: 700
		},
		imgHeight:300,
		imgWidth:700
	}

	toggleModal = () => {
		const {modalOpened} = this.state;
		this.setState({modalOpened:!modalOpened});
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

	onChange = (crop) => {
  this.setState({ crop });
}

setRef = img => {
	let imgHeight = img.naturalHeight;
	let imgWidth = img.naturalWidth;
	console.log(imgHeight,imgWidth,'before')
	 while(imgHeight > 300 || imgWidth > 700){
      imgWidth *= 0.97;
      imgHeight *=0.97;
    }
    console.log(imgHeight,imgWidth,'after')
	this.setState({
		imgHeight,imgWidth
	});
	this.imgref = img;
}

	render(){
		const {file,submitted,dataUrl,scale,modalOpened,imgHeight,imgWidth} = this.state;
		const {classes,processing} = this.props;
		console.log(imgWidth,imgHeight,'render');
			return (
				<div className={classes.profileMeta}>
					 <Modal
			          aria-labelledby="edit-channel-background"
			          aria-describedby="edit-channel-background"
			          open={modalOpened}
			   		  onClose={this.toggleModal}
			        >
						<div className={classes.modal}>
							<div className={classes.modalHeader}>Edit Background
									<label htmlFor="background-file" className={classes.thumbInputLabel}>
										{file ? 'Choose another file' : 'Choose file'}
									</label>
									<input type="file" accept="image/*" hidden onChange={this.fileChosenHandler} id="background-file" />
								</div>
							<div className={classes.modalBody}>
							
							
							<div className={[classes.thumbnailPreview,dataUrl ? '' : classes.dashed].join(' ')}>
								{dataUrl ?
									<div className={classes.backgroundWrapper} style={{width:imgWidth,height:imgHeight}}> 
										<img width="100%" height="100%" src={dataUrl} ref={this.setRef} />
									</div> 
									: <div>
										Recommended size of image is 2560x1440
									</div>
									}
							</div>
							

							</div>
								<div className={classes.modalFooter}>
									<Button variant="outlined" color="primary" 
									onClick={this.updateThumbnail}>{processing && submitted ?
									 'Saving...' : 'Save'}</Button>
									</div>
						</div>
		        	</Modal>
					{this.props.children}
					<Tooltip title="Edit background">
						<IconButton className={classes.editBackgroundIcon} onClick={this.toggleModal}>
							<EditIcon />
						</IconButton>
					</Tooltip>
				</div>
			)
	}
}

export default withStyles(styles)(ChannelHeader);