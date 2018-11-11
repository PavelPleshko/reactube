import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ImageIcon from '@material-ui/icons/Image';

const subscriptions = (props) => {
	const {subscriptions} = props;

	return (
		        <List subheader={<ListSubheader component="div">Subscriptions</ListSubheader>}>
           {subscriptions && subscriptions.map(item=>{
            return <Link key={item._id} to={`/channel/${item.slug}`}>
                      <ListItem button>

                      {item.iconImage ?  <Avatar src={item.iconImage} /> :
                       <ListItemIcon>
                    	   	<ImageIcon />
                      </ListItemIcon>}
                      <ListItemText primary={item.title} />
                    </ListItem>
                   </Link>
          })}
        </List>
		)
}


export default subscriptions;