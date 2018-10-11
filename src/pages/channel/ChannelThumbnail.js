import React, {Component,Fragment} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//meterial ui
import ImageIcon from '@material-ui/icons/Image';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';

import FileInfoTable from '../../components/core/Tables/FileInfoTable/FileInfoTable';
import * as channelOperations from '../../store/states/channel/channel.operations';
import {selectProcessing} from '../../store/states/channel';

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
    outline:'none'
  },
  modalBody:{
  	    padding: theme.spacing.unit * 2,
  	        backgroundColor: '#fff'
  },
  modalHeader:{
  	position:'relative',
  	textAlign:'center',
  	top:0,
  	left:0,
  	color:'#fff',
  	padding:'1rem',
  	backgroundColor:theme.palette.primary.light
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
	channelThumbnail:{
		width:'100%',
		height:'100%',
		backgroundPosition:'50% 50%',
		backgroundSize:'cover'
	},
	editIconBtn:{
		position:'absolute',
		top:0,
		right:0,
		width:30,
		height:30
	},
	editIcon:{
		fontSize:'1.15rem'
	},
	thumbInputLabel:{
		position:'relative',
		left:'50%',
		transform:'translateX(-50%)',
		padding:'.3rem .7rem',
		borderRadius:4,
		display: 'inline-block',
		textTransform:'uppercase',
		color:'rgba(0, 0, 0, 0.54)',
		backgroundColor:'transparent',
		transition:'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		fontSize:'.85rem',
		'&:hover':{
			backgroundColor:'rgba(63, 81, 181, 0.08)',
			cursor:'pointer'
		}
	}
});

class ChannelThumbnail extends Component{


		state = {
		modalOpened:false,
		file:null,
		submitted:false
	}

	componentDidMount = () => {
		this.formData = new FormData();
	}

	toggleModal = () => {
		const {modalOpened} = this.state;
		this.setState({modalOpened:!modalOpened});
		if(modalOpened){
			this.resetState();
		}
	}
	fileChosenHandler = (e) => {
		let iconImage = e.target.files[0];
		 this.setState({ file: iconImage});
		 this.formData.set('iconImage',iconImage);

	}

	resetState = () => {
		this.setState({file:null,modalOpened:false,submitted:false});
	}

	updateThumbnail = () => {
		if(!this.props.processing){
			const {updateChannel,channelId} = this.props;
			if(this.state.file){
				
				this.setState({submitted:true},()=>updateChannel(this.formData,channelId));		
			}
		}
	}

	componentDidUpdate = (nextProps,nextState) => {
		if(nextState.submitted){
			const {processing} = this.props;
			if(!processing){
				this.resetState();
			}
		}
	}
	
	render(){

		const {modalOpened, file} = this.state;
		const {iconImage,classes,processing} = this.props;

		return (
			<Fragment>
			 <Modal
          aria-labelledby="edit-channel-thumbnail"
          aria-describedby="edit-channel-thumbnail"
          open={modalOpened}
   		  onClose={this.toggleModal}
        >
			<div className={classes.modal}>
				<div className={classes.modalHeader}>Change channel's thumbnail</div>
				<div className={classes.modalBody}>
					<label htmlFor="thumbnail-file" className={classes.thumbInputLabel}>
						{file ? 'Choose another file' : 'Choose file'}
					</label>
				
				<input type="file" accept="image/*" hidden onChange={this.fileChosenHandler} id="thumbnail-file" />
				{file && <Fragment>
						<FileInfoTable file={file} />
						<Button variant="contained" color="primary" onClick={this.updateThumbnail}>{processing ? 'Updating...' : 'Update'}</Button>
					</Fragment>}

				</div>
			</div>
        </Modal>
        				<div className={classes.channelThumnbnail}>
					{iconImage ? 
						<div style={{backgroundImage:`url(${iconImage})`}}
						className={classes.channelThumbnail}></div>
						: <ImageIcon className={classes.iconNoPhoto} />}
					 <IconButton onClick={this.toggleModal} color="primary" className={classes.editIconBtn} aria-label="Edit channel thumbnail">
      					 <EditIcon className={classes.editIcon} />
     				 </IconButton>										
				</div>
				</Fragment>
			)
	}
}


const mappedStateToProps = (state) =>(
{
  processing:selectProcessing(state.channel,'single')
}
  );


const boundActionCreators = (dispatch) => bindActionCreators({...channelOperations},dispatch);



export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(ChannelThumbnail));