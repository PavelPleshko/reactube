import React,{PureComponent} from 'react';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StorageIcon from '@material-ui/icons/Storage';
import SizeIcon from '@material-ui/icons/PhotoSizeSelectActual';
import { withStyles } from '@material-ui/core/styles';

import {transformBytes,transformSeconds} from '../../../utils/pipes/fileDataTransforms';


const styles = theme =>({
	card:{
		padding:'.2rem 1rem',
		marginBottom:'.5rem',
	},
  listItem:{
        fontFamily:theme.typography.mainFont
  }
})
class FileInformation extends PureComponent{

	

	render(){
	const {file:{bytes,duration,width,height},classes} = this.props;

	return (
		<Card className={classes.card}>
			   <List subheader={<ListSubheader>About the file</ListSubheader>}>
          {duration && <ListItem>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItem}} primary="Duration" />
            <ListItemSecondaryAction>
            	{transformSeconds(duration)}
            </ListItemSecondaryAction>
          </ListItem>
        }
          <ListItem>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItem}} primary="Size" />
            <ListItemSecondaryAction>
         	     {transformBytes(bytes)}
            </ListItemSecondaryAction>
          </ListItem> 

           <ListItem>
            <ListItemIcon>
              <SizeIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listItem}} primary="Dimensions" />
            <ListItemSecondaryAction>
         	     {width} x {height}
            </ListItemSecondaryAction>
          </ListItem>

        </List>
		</Card>
		)

}
}


export default withStyles(styles)(FileInformation);