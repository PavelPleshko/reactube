import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import {withStyles} from '@material-ui/core/styles';

import {selectUserChannels} from '../../../store/states/user/user.selectors';
import * as userOperations from '../../../store/states/user/user.operations';
import * as channelOperations from '../../../store/states/channel/channel.operations';
import CreateChannelForm from './profileChannels/CreateChannelForm';
import ChannelSingle from './profileChannels/ChannelSingle';

const OWN_NO_CHANNELS_CAPTION = `You don't have any channels now.`;
const OTHER_NO_CHANNELS_CAPTION = `User doesn't have any channels now.`;

const styles = theme => ({
  modal: {
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor: '#ffffff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline:'none'
  },
  channelsHeader:{
  	marginRight:'2rem'
  }
});

class ProfileChannels extends Component{

state = {
	noChannelsCaption:OWN_NO_CHANNELS_CAPTION,
	createChannelModalOpen:false
};

componentDidMount = () => {
	const {channels,getUserChannels,userId} = this.props;
	this.getNoChannelsCaption();
	if(!channels){
		getUserChannels(userId);
	}
}

getNoChannelsCaption(){
	if(this.props.userId){
		this.setState({noChannelsCaption:OTHER_NO_CHANNELS_CAPTION});
	}
}


openModal = () => {
	if(!this.state.createChannelModalOpen){
		this.setState({createChannelModalOpen:true});
	}
}

handleCloseModal = () => {
	if(this.state.createChannelModalOpen){
		this.setState({createChannelModalOpen:false});
	}
}

afterFormSubmitted = (values) => {
	if(values) this.props.createNewChannel(values);
}

render(){
	const {channels,classes} = this.props;
	const {noChannelsCaption,createChannelModalOpen} = this.state;
	return (
<Fragment>
 <Modal
          aria-labelledby="create-channel"
          aria-describedby="create-channel"
          open={createChannelModalOpen}
    onClose={this.handleCloseModal}
        >
<div className={classes.modal}>
	<CreateChannelForm formSubmitted={this.afterFormSubmitted} />
</div>

        </Modal>
{channels ? <div>
		<div>
			<span className={classes.channelsHeader}>Channels <strong>({channels.length || 0})</strong></span>
			<Button variant="contained" color="primary" onClick={this.openModal}>Add channel</Button>
		</div>
		<List>
		{channels.map(channel=>{
			return <ChannelSingle channel={channel} key={channel._id} />
					

				
		})}
		</List>
	</div>
	 : 
	 <div>
        				{noChannelsCaption} </div>
        			}
		
</Fragment>
)

}

}

const mappedStateToProps = (state,ownProps) =>{
	const {userId} = ownProps;

return {
  channels:selectUserChannels(state.user,userId)
}
}


const boundActionCreators = (dispatch) => 
bindActionCreators({...userOperations,...channelOperations},dispatch);

export default connect(mappedStateToProps,boundActionCreators)
(withStyles(styles)(ProfileChannels));