import React, {Component,Fragment} from 'react';

//meterial ui
import ImageIcon from '@material-ui/icons/Image';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/lab/Slider';
import {withStyles} from '@material-ui/core/styles';

import AvatarEditor from 'react-avatar-editor'

import EditAvatarModal from './avatarWithUpdateModal/EditAvatarModal';

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
	borderAroundWrapper:{
		border:`1px solid ${theme.palette.primary.textColor}`
	},
	iconNoPhoto:{
		color:theme.palette.primary.grey,
		fontSize:'4rem',
		opacity:.4
	},
	channelThumbnail:{
		width:'100%',
		height:'100%'
	},
	editIconBtn:{
		position:'absolute',
		top:'50%',
		left:'50%',
		transform:'translate(-50%,-50%)'
	},
	editIcon:{
		fontSize:'2.15rem',
		color:'#fff'
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

class AvatarWithUpdateModal extends Component{

	state = {
		modalOpened:false,
		showEditIcon:false
	}

	openModal = () => {
		this.setState({modalOpened:true});
	}

	closeModal = () => {
		this.setState({modalOpened:false});
	}

	updateThumbnail = formData => {
		const {submitForm,processing} = this.props;
		if(!processing){		
			if(formData){
				submitForm(formData);	
			}
		}
	}

	toggleEditIcon = () => {
		const {showEditIcon} = this.state;
		this.setState({
			showEditIcon:!showEditIcon
		})
	}

	render(){
		const {modalOpened,showEditIcon} = this.state;
		const {avatar,classes,processing,resourceKey='iconImage'} = this.props;

		return (
			<Fragment>
					{modalOpened && <EditAvatarModal processing={processing}
					updateResource={this.updateThumbnail}
					 closeModal={this.closeModal}
					 resourceKey={resourceKey}
					 modalOpened={modalOpened} />}
        				<div className={[classes.channelThumbnailWrapper,avatar ? '' : classes.borderAroundWrapper].join(' ')}
        				onMouseLeave={this.toggleEditIcon}
            			onMouseEnter={this.toggleEditIcon}>
					{avatar ? 
						<img src={avatar}
						className={classes.channelThumbnail} />
						: <ImageIcon className={classes.iconNoPhoto} />}
					 {showEditIcon && 
					 <Tooltip title="Click to edit">
						 <IconButton onClick={this.openModal} color="primary" className={classes.editIconBtn} aria-label="Edit channel thumbnail">
	      					 <EditIcon className={classes.editIcon} />
	     				 </IconButton>
     				 </Tooltip>
     				 }										
				</div>
				</Fragment>
			)
	}
}



export default withStyles(styles)(AvatarWithUpdateModal);