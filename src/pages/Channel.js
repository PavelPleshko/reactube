import React, {Component,Fragment} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//meterial ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';


import MediaTile from '../components/core/MediaTile/MediaTile';
import ChannelTabs from './channel/ChannelTabs';
import ChannelHeader from './channel/ChannelHeader';

import {selectUser} from '../store/states/user';
import {selectChannel,selectProcessing} from '../store/states/channel';
import * as channelOperations from '../store/states/channel/channel.operations';

const styles = theme => ({
	root:{
		
	},
	userFullname:{
		fontSize:'1.1rem',
		fontWeight:500,
		marginLeft:5
	},

	icon:{
		color:theme.palette.primary.light
	}
});


class Channel extends Component{


	componentDidMount = () => {
			let slug = this.props.match.params.channelId;
			this.props.getChannelBySlug(slug);
	}

	isChannelOwner = (channel,user) =>{
		if(!channel || !user) return false;
		if(channel && user){
			const owner=channel.owner._id || channel.owner;
			return owner === user._id;
		}
	}

	isSubscribed = (channel,user)=>{
		if(!channel || !user) return false;
		if(channel && user){
			const subscriptions=user.subscribed;
			console.log(subscriptions);
			return subscriptions.includes(channel._id);
		}
	}



	render(){
		const {classes,user,channel,processing} = this.props;
		const isOwner = this.isChannelOwner(channel,user);
		const channelBackground = channel ? channel.backgroundImage : null;
		const channelId = channel ? channel._id : null;
		const isSubscribed = this.isSubscribed(channel,user);
	return (

		<Paper elevation={1} className={classes.root}>	
			{(!channelBackground && !isOwner) ? null : <ChannelHeader processing={processing} 
			channelId={channelId} channelBackground={channelBackground} />}
			<ChannelTabs isOwner={isOwner} isSubscribed={isSubscribed} channel={channel}/>
		</Paper>
	)
	}
}

const mappedStateToProps = (state) =>(
{
  user:selectUser(state.user),
  channel:selectChannel(state.channel,'single'),
  processing:selectProcessing(state.channel)
}
  );
const boundActionCreators = (dispatch) => bindActionCreators({...channelOperations},dispatch);


export default connect(mappedStateToProps,boundActionCreators)(withStyles(styles)(Channel));