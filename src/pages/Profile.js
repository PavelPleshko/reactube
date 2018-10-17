import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectUser,selectUserFullname,selectUserChannels,
selectIsProcessing} from '../store/states/user';
import * as userOperations from '../store/states/user/user.operations';

//meterial ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';


import UserAvatarBig from '../components/UI/miscellaneous/UserAvatarBig/UserAvatarBig';
import UserAvatarWithModal from '../components/core/Modals/AvatarWithUpdateModal';
import MediaTile from '../components/core/MediaTile/MediaTile';
import ProfileTabs from './profile/ProfileTabs';

const styles = theme => ({
	root:{
		
	},
	profileMeta:{
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		padding:'1rem 2rem',
		backgroundColor:'#fafafa'
	},
	avatarGroup:{
		display:'flex',
		alignItems:'center'
	},
	userFullname:{
		fontSize:'1.25rem',
		fontWeight:700,
		marginLeft:'1.1rem'
	},
	userChannels:{
		fontSize:'1.1rem',
		display:'flex',
		alignItems:'center'
	},
	channelsNumber:{
		color:theme.palette.primary.active,
		fontSize:'1.9rem',
		fontWeight:200,
		marginRight:5
	},
	mainInfo:{

	}
});

const TabContainer = ({children}) =>{
	return (<div style={{padding:'1rem 2rem'}}>	
			{children}
		</div>
		)
}

class Profile extends Component{
	
	componentDidMount = () => {
		const {user,userChannels,getUserChannels} = this.props;
		if(!userChannels || userChannels.length === 0){
			let userId = user._id;
			getUserChannels(userId);
		}
	}

	updateUserAvatar = formData => {
		const {updateUser} = this.props;
		if(formData){
			updateUser(formData);
		}
	}

	render(){
		const {classes,user,userChannels,userFullName,processing} = this.props;
		const userAvatar = user && user.photo;
	return (
		<Paper elevation={2} className={classes.root}>
			<div className={classes.profileMeta}>
				<div className={classes.avatarGroup}>
					<UserAvatarWithModal 
					processing={processing}
					  resourceKey="photo" 
			           avatar={userAvatar} 
			           submitForm={this.updateUserAvatar}
					/>		
					<div className={classes.userFullname}>{userFullName}</div>
				</div>
				{userChannels ?
				<div className={classes.userChannels}>
					<span className={classes.channelsNumber}>
						{userChannels.length}
					</span>
					<span>
						channels
					</span>
				</div>
				: null
			}
			</div>
		<ProfileTabs userId={user && user._id} />
		</Paper>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  user:selectUser(state.user),
  userFullName:selectUserFullname(state.user),
  userChannels:selectUserChannels(state.user),
  processing:selectIsProcessing(state.user)
}
  );

const boundActionCreators = (dispatch) => 
bindActionCreators({...userOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Profile));