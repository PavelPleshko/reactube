import React, {Component,Fragment} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//meterial ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ImageIcon from '@material-ui/icons/Image';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';


import MediaTile from '../components/core/MediaTile/MediaTile';
import ChannelTabs from './channel/ChannelTabs';
import FileInfoTable from '../components/core/Tables/FileInfoTable/FileInfoTable';

import {selectUser} from '../store/states/user';
import {selectChannel} from '../store/states/channel';
import * as channelOperations from '../store/states/channel/channel.operations';

const styles = theme => ({
	root:{
		
	},
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
	profileMeta:{
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		padding:'1rem 2rem',
		backgroundColor:'#fafafa'
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
	userFullname:{
		fontSize:'1.1rem',
		fontWeight:500,
		marginLeft:5
	},
	userSubscribers:{
		fontSize:'1.1rem',
		display:'flex',
		alignItems:'center'
	},
	subscribersNumber:{
		color:theme.palette.primary.light,
		fontSize:'1.9rem',
		fontWeight:200,
		marginRight:5
	},
	icon:{
		color:theme.palette.primary.light
	},
	mainInfo:{

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


class Channel extends Component{
	state = {
		modalOpened:false,
		file:null
	}

	componentDidMount = () => {
		if(!this.props.channel){
			let slug = this.props.match.params.channelId;
			this.props.getChannelBySlug(slug);
		}
	}

	toggleModal = () => {
		const {modalOpened} = this.state;
		this.setState({modalOpened:!modalOpened});
	}

	fileChosenHandler = (e) => {
		 this.setState({ file: e.target.files[0]});
	}
	
	render(){
		const {classes,user,channel} = this.props;
		const {modalOpened,file} = this.state;
		const owner = channel ? channel.owner : null;
	return (

		<Paper elevation={2} className={classes.root}>
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
						<Button variant="contained" color="primary">Upload</Button>
					</Fragment>}

				</div>
			</div>
        </Modal>
			<div className={classes.profileMeta}>
				<div className={classes.channelThumnbnail}>
					{channel && channel.iconImage ? 
						<div style={{backgroundImage:`url(${channel.iconImage})`}}
						className={classes.channelThumbnail}></div>
						: <ImageIcon className={classes.iconNoPhoto} />}
					 <IconButton onClick={this.toggleModal} color="primary" className={classes.editIconBtn} aria-label="Edit channel thumbnail">
      					 <EditIcon className={classes.editIcon} />
     				 </IconButton>										
				</div>
				{channel && channel.subscribers ?
				<div className={classes.userSubscribers}>
					<span className={classes.subscribersNumber}>
						{channel.subscribers.length || 0}
					</span>
					<span>
						subscribers
					</span>
				</div>
				: null
			}
			</div>
		<ChannelTabs channelId={channel && channel._id}/>
		</Paper>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  user:selectUser(state.user),
  channel:selectChannel(state.channel,'single')
}
  );
const boundActionCreators = (dispatch) => bindActionCreators({...channelOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Channel));