import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

import {selectChannelMedias} from '../../../store/states/channel/channel.selectors';
import * as channelOperations from '../../../store/states/channel/channel.operations';

import MediaTile from '../../../components/core/MediaTile/MediaTile';

const OWN_NO_CHANNELS_CAPTION = `You don't have any channels now.`;
const OTHER_NO_CHANNELS_CAPTION = `User doesn't have any channels now.`;

const styles = theme => ({

});

class ChannelMedia extends Component{

state = {
	noChannelsCaption:OWN_NO_CHANNELS_CAPTION
};

componentDidMount = () => {
	const {medias,getChannelMedia,channelId} = this.props;
	console.log(medias);
	if(!medias || medias.length === 0){
		getChannelMedia(channelId);
	}
}






render(){
	const {medias} = this.props;

	return (
medias ? <MediaTile items={medias} columns={4} /> : null
)

}

}

const mappedStateToProps = (state) =>{
	return {
	  medias:selectChannelMedias(state.channel)
	}
}


const boundActionCreators = (dispatch) => 
bindActionCreators({...channelOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)
(withStyles(styles)(ChannelMedia));