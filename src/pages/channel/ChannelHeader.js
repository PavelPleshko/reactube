import React, {Component,Fragment} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as channelOperations from '../../store/states/channel/channel.operations';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {calculateAspectRatioFit,getImageNaturalDimensions,
getCroppedImg} from '../../utils/image-processing/image-processing';

const RECOMMENDED_IMG_WIDTH=2560;
const RECOMMENDED_IMG_HEIGHT=1440;


const styles = theme => ({
	profileMeta:{
		display:'flex',
		position:'relative',
		justifyContent:'space-between',
		alignItems:'center',
		padding:'1rem 2rem',
		backgroundColor:'#fafafa',
		backgroundSize:'100% auto',
		backgroundPosition:'0 0'
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
			  aspect:21/4,
			  width: 700
		},
		imgWidth:700,
		imgHeight:300
	}

	componentDidMount = () => {
		this.formData = new FormData();
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
			 this.updateImage(result);
			 this.setState({ file: iconImage,dataUrl:result})
		}
	}


	updateImage = async (dataUrl) =>{
		const {width,height} = await getImageNaturalDimensions(dataUrl);
		const dims = calculateAspectRatioFit(width,height,700,300);
		this.setState({
			imgHeight:dims.height,imgWidth:dims.width
		});
	}

	onChange = (crop) => {
  		this.setState({ crop });
	}

	updateBackground = () =>{
		const {crop,dataUrl,file,imgWidth,imgHeight} = this.state;
		const {updateChannel,channelId} = this.props;
		const image = new Image();
		image.src = dataUrl;
		this.setState({submitted:true});
		image.onload = async () =>{		
			const pixelCrop = this.pixelateCrop(crop,imgWidth,imgHeight);		
			const croppedImage = await getCroppedImg(image,imgWidth,imgHeight,pixelCrop,file.name);
			this.formData.set('backgroundImage',croppedImage);
			updateChannel(this.formData,channelId);
		}
	}

	pixelateCrop = (crop,imgWidth,imgHeight) => {
		const pixelCrop = Object.assign({},crop);
		pixelCrop.x = (imgWidth/100) *pixelCrop.x;
		pixelCrop.y = (imgHeight/100) *pixelCrop.y;
		pixelCrop.width = (imgWidth/100) *pixelCrop.width;
		pixelCrop.height = (imgHeight/100) *pixelCrop.height;
		return pixelCrop;
	}


	render(){
		const {file,submitted,dataUrl,modalOpened,imgHeight,imgWidth} = this.state;
		const {classes,processing,channelBackground} = this.props;
			return (
				<div className={classes.profileMeta} style={{backgroundImage:channelBackground ? `url(${channelBackground})` : ''}}>
					 <Modal
			          aria-labelledby="edit-channel-background"
			          aria-describedby="edit-channel-background"
			          open={modalOpened}
			   		  onClose={this.toggleModal} >
						<div className={classes.modal}>
							<div className={classes.modalHeader}>Edit Background
									<label htmlFor="background-file" className={classes.thumbInputLabel}>
										{file ? 'Choose another file' : 'Choose file'}
									</label>
									<input type="file" accept="image/*" hidden onChange={this.fileChosenHandler} id="background-file" />
								</div>
							<div className={classes.modalBody}>
											
							<div className={[classes.thumbnailPreview,dataUrl ? '' : classes.dashed].join(' ')}>							
									{dataUrl ? <div className={classes.backgroundWrapper}> 
										<ReactCrop src={dataUrl} onChange={this.onChange} crop={this.state.crop} imageStyle={{height:imgHeight,width:imgWidth}}/>
										</div>
									: <div>
										Recommended size of image is {`${RECOMMENDED_IMG_WIDTH}x${RECOMMENDED_IMG_HEIGHT}`}
									</div>
									}
							</div>
							

							</div>
								<div className={classes.modalFooter}>
									<Button variant="outlined" color="primary" 
									onClick={this.updateBackground}>{processing && submitted ?
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

const boundActionCreators = (dispatch) => bindActionCreators({...channelOperations},dispatch);

export default connect(null,boundActionCreators)(withStyles(styles)(ChannelHeader));