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
import ChannelThumbnail from './channel/ChannelThumbnail';
import ChannelHeader from './channel/ChannelHeader';

import {selectUser} from '../store/states/user';
import {selectChannel} from '../store/states/channel';
import * as channelOperations from '../store/states/channel/channel.operations';

const styles = theme => ({
	root:{
		
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
		const channelThumbnail = channel ? channel.iconImage : null;

	return (

		<Paper elevation={2} className={classes.root}>
		
			<ChannelHeader>
				<ChannelThumbnail channelId={channel && channel._id} iconImage={channelThumbnail} />
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

			</ChannelHeader>
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