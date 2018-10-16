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
		if(!this.props.channel){
			let slug = this.props.match.params.channelId;
			this.props.getChannelBySlug(slug);
		}
	}



	render(){
		const {classes,user,channel,processing} = this.props;
		const owner = channel ? channel.owner : null;
		const channelBackground = channel ? channel.backgroundImage : null;
		const channelId = channel ? channel._id : null;
	return (

		<Paper elevation={1} className={classes.root}>	
			<ChannelHeader processing={processing} channelId={channelId} channelBackground={channelBackground} />
			<ChannelTabs channel={channel}/>
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