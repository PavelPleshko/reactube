import React from 'react';

import {Link} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';


const userAvatarSmall = (props)=>{
	const {user,open,handleClick,link=false} = props;
	return (
		         <IconButton
                          aria-owns={open ? 'menu-appbar' : null}
                          aria-haspopup="true"
                          onClick={handleClick}
                          color="inherit"
                        >
                        {link && <Link to={`/profile/${user._id}`}>
                          {user.avatar ? <Avatar src={user.avatar} /> : <AccountCircle style={{fontSize:'2.5rem'}} />}
                         </Link>}  
                        {!link && 
                          (user.avatar ? <Avatar src={user.avatar} /> : <AccountCircle style={{fontSize:'2.5rem'}}/>)
                        }
                          </IconButton>
		)
}


export default userAvatarSmall;