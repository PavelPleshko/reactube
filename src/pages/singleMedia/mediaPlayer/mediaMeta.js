import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import PrimaryActions from './mediaMeta/PrimaryActions';
import SecondaryActions from './mediaMeta/SecondaryActions';


const styles = theme =>({
  views:{
  	color:'rgba(18,18,18,.6)'
  },
  title:{
  	display: 'block',
    maxHeight: '4.8rem',
    overflow: 'hidden',
    fontSize: '1.4rem',
    fontWeight: 400,
  },
  subtitle:{
  	display: 'flex',
    justifyContent: 'space-between'
  }

})
const mediaMeta = (props)=>{
		const {media,classes,user} = props;
		return (
			<React.Fragment>
		   	<div className={classes.meta}>
					<h1 className={classes.title}>{media.title}</h1>
					<div className={classes.subtitle}>
					 <span className={classes.views}>
					    {media.views + ' views'}
					 </span>
					 <PrimaryActions />
					 </div>
			</div>
					<Divider />
					<ListItem>
					    <ListItemAvatar>
					      <Avatar>
					        {media.postedBy.lastName && 
					                        media.postedBy.lastName[0]}
					      </Avatar>
					    </ListItemAvatar>
					    <ListItemText primary={media.postedBy.firstName + ' ' + media.postedBy.lastName} 
					              secondary={"Published on " + 
					                        (new Date(media.created))
					                        .toDateString()}/>

					    <SecondaryActions mediaId={media._id} mediaTitle={media.title} />
					      {(user && user._id
						    !== media.postedBy._id) && (<Button variant="contained" color="secondary">Subscribe</Button>)}
					</ListItem>

					<ListItem>
					    <ListItemText primary={media.description}/>
					</ListItem>
					</React.Fragment>
		)
}


export default withStyles(styles)(mediaMeta);