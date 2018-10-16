import React, {Component,Fragment} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//meterial ui
import ImageIcon from '@material-ui/icons/Image';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Slider from '@material-ui/lab/Slider';
import {withStyles} from '@material-ui/core/styles';

import AvatarEditor from 'react-avatar-editor'

import EditThumbnailModal from './channelThumbnail/EditThumbnailModal';

import * as channelOperations from '../../store/states/channel/channel.operations';
import {selectProcessing} from '../../store/states/channel';



const styles = theme => ({
	channelThumbnailWrapper:{
		display:'flex',
		alignItems:'center',
		justifyContent:'center',
		flexShrink:0,
		position:'relative',
		width:'6rem',
		height:'6rem',
		borderRadius:'50%',
		overflow:'hidden',
		backgroundColor:theme.palette.primary.lightGrey
	},
	iconNoPhoto:{
		color:'#fff',
		fontSize:'4rem',
		opacity:.8
	},
	channelThumbnail:{
		width:'100%',
		height:'100%'
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

class ChannelThumbnail extends Component{

	state = {
		modalOpened:false
	}

	openModal = () => {
		this.setState({modalOpened:true});
	}

	closeModal = () => {
		this.setState({modalOpened:false});
	}

	updateThumbnail = (formData) => {
		if(!this.props.processing){
			const {updateChannel,channelId} = this.props;
			if(formData){
				updateChannel(formData,channelId);	
			}
		}
	}

	render(){

		const {modalOpened,submitted} = this.state;
		const {iconImage,classes,processing} = this.props;

		return (
			<Fragment>
					{modalOpened && <EditThumbnailModal processing={processing}
					updateResource={this.updateThumbnail}
					 closeModal={this.closeModal}
					 modalOpened={modalOpened} />}
        				<div className={classes.channelThumbnailWrapper}>
					{iconImage ? 
						<img src={iconImage}
						className={classes.channelThumbnail} />
						: <ImageIcon className={classes.iconNoPhoto} />}
					 <IconButton onClick={this.openModal} color="primary" className={classes.editIconBtn} aria-label="Edit channel thumbnail">
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