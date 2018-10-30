import React from 'react';
import {Link} from 'react-router-dom';
import logoimg from '../../../../assets/logo.png';


const logo = (props)=>{

return (
 
    <Link to="/">
      <img src={logoimg} height="100%" />
    </Link>
 
	)
}


export default logo;