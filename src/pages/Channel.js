import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//meterial ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';


import UserAvatarBig from '../components/UI/miscellaneous/UserAvatarBig/UserAvatarBig';
import MediaTile from '../components/core/MediaTile/MediaTile';
import ChannelTabs from './channel/ChannelTabs';

import {selectUser} from '../store/states/user';
import {selectChannel} from '../store/states/channel';
import * as channelOperations from '../store/states/channel/channel.operations';

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

	}
});


class Channel extends Component{

	componentDidMount = () => {
		if(!this.props.channel){
			let slug = this.props.match.params.channelId;
			this.props.getChannelBySlug(slug);
		}
	}
	
	render(){
		const {classes,user,channel} = this.props;
		const owner = channel ? channel.owner : null;
		
	return (
		<Paper elevation={2} className={classes.root}>
			<div className={classes.profileMeta}>
				<div className={classes.avatarGroup}>
					<UserAvatarBig user={owner || {}} classes={{icon:classes.icon}} />		
					
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
		<ChannelTabs />
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