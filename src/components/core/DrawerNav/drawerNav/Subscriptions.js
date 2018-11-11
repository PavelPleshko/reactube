import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ImageIcon from '@material-ui/icons/Image';

const styles = theme => ({
	title:{
		textOverflow:'ellipsis',
		overflow:'hidden',
		whiteSpace:'nowrap'
	}
})

const subscriptions = (props) => {
	const {subscriptions,classes} = props;

	return (
		        <List subheader={<ListSubheader component="div">Subscriptions</ListSubheader>}>
           {subscriptions && subscriptions.map(item=>{
            return <Link key={item._id} to={`/channel/${item.slug}`}>
                      <ListItem button>

                      {item.iconImage ?  <Avatar src={item.iconImage} /> :
                       <ListItemIcon>
                    	   	<ImageIcon />
                      </ListItemIcon>}
                      <ListItemText primary={item.title} classes={{primary:classes.title}} />
                    </ListItem>
                   </Link>
          })}
        </List>
		)
}


export default withStyles(styles)(subscriptions);