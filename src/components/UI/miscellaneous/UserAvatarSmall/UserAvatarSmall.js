import React from 'react';

import {Link} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  icon:{
    color:theme.palette.primary.textColor,
    fontSize:'2.5rem'
  }
})

const userAvatarSmall = (props)=>{
	const {avatar,userId,open,handleClick,link=false,classes} = props;
	return (
		         <IconButton
                          aria-owns={open ? 'menu-appbar' : null}
                          aria-haspopup="true"
                          onClick={handleClick}
                          color="inherit"
                        >
                        {link && <Link to={`/profile/${userId}`}>
                          {avatar ? <Avatar src={avatar} /> : <AccountCircle className={classes.icon}/>}
                         </Link>}  
                        {!link && 
                          (avatar ? <Avatar src={avatar} /> : <AccountCircle className={classes.icon}/>)
                        }
                          </IconButton>
		)
}


export default withStyles(styles)(userAvatarSmall);