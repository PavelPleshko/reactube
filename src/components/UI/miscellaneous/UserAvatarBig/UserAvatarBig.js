import React from 'react';

import {Link} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';


const userAvatarBig = (props)=>{
	const {user,classes} = props;
	return (
		         <div  className={classes.icon}>
                       
                        {
                          (user.avatar ? <Avatar src={user.avatar} /> : <AccountCircle style={{fontSize:'7rem'}}/>)
                        }
                        
                          </div>
		)
}


export default userAvatarBig;