import React from 'react';
import {Link} from 'react-router-dom';

//material ui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
	success:{
		color:'#ffffff',
		backgroundColor:theme.palette.primary.success,
		'&:hover':{
			backgroundColor:theme.palette.primary.successHover	
		}
	},
	error:{
		color:'#ffffff',
		backgroundColor:theme.palette.primary.error,
		'&:hover':{
			backgroundColor:theme.palette.primary.errorHover	
		}
	},
	standard:{
		color:'#ffffff',
		backgroundColor:theme.palette.primary.standard,
		'&:hover':{
			backgroundColor:theme.palette.primary.standardHover	
		}
	}
});

const dialogWithType = ({open,close,title,linkToPage,actionBtnText,type,...rest})=>{
const classes = rest.classes;
return (
	 <Dialog open={open} disableBackdropClick={true}>
   <DialogTitle>{title}</DialogTitle>
   <DialogContent>
      <DialogContentText>
        {rest.children}
      </DialogContentText>
   </DialogContent>
   <DialogActions>
      {linkToPage ? 
      	<Link to={linkToPage}>
	         <Button className={classes[type]} autoFocus="autoFocus" variant="raised">
	           {actionBtnText}
	         </Button>
     	 </Link> : 
     	 <Button onClick={close} className={classes[type]} autoFocus="autoFocus" variant="raised">
           {actionBtnText}
         </Button>}
   </DialogActions>
</Dialog>
	)
}


export default withStyles(styles)(dialogWithType);