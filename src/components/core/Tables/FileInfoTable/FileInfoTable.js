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
import FolderIcon from '@material-ui/icons/Folder';
import { withStyles } from '@material-ui/core/styles';

import {transformBytes,transformSeconds} from '../../../../utils/pipes/fileDataTransforms';
import {trimInTheMiddle} from '../../../../utils/pipes/truncate';


const styles = theme =>({
	card:{
		padding:'.2rem 0',
		marginBottom:'.5rem'
	},
  listItem:{
    paddingLeft:0
  }
})
class FileInfoTable extends PureComponent{


isImage = (type) =>{
  return type.includes('image');
}


	render(){
	let {file:{bytes,name,type,size,duration,width,height},classes} = this.props;
  const isImage = this.isImage(type);
  if(isImage){
    bytes = size;
  }
	return (
		<div className={classes.card}>
        
			   <List>
         <ListItem className={classes.listItem}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Name" />
            <ListItemSecondaryAction>
                <span title={name}>{trimInTheMiddle(name,10,10)}</span>
            </ListItemSecondaryAction>
          </ListItem>

          {duration && <ListItem className={classes.listItem}>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Duration" />
            <ListItemSecondaryAction>
            	{transformSeconds(duration)}
            </ListItemSecondaryAction>
          </ListItem>
        }
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="Size" />
            <ListItemSecondaryAction>
         	     {transformBytes(bytes)}
            </ListItemSecondaryAction>
          </ListItem> 

           {!isImage && <ListItem className={classes.listItem}>
            <ListItemIcon>
              <SizeIcon />
            </ListItemIcon>
            <ListItemText primary="Dimensions" />
            <ListItemSecondaryAction>
         	     {width} x {height}
            </ListItemSecondaryAction>
          </ListItem>
        }
        </List>
		</div>
		)

}
}


export default withStyles(styles)(FileInfoTable);