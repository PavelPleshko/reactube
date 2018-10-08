import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import {Link} from 'react-router-dom';

class ChannelSingle extends Component {

	shouldComponentUpdate = (nextProps) => {
		return nextProps.channel._id !== this.props.channel._id;
	}

	render(){
		const {channel={}} = this.props;

	return (
				<ListItem>
					<Link to={`/channel/${channel.slug}`}>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</Link>
					<ListItemText primary={channel.title} secondary={channel.description} />
				</ListItem>

		)
	}

}

export default ChannelSingle;