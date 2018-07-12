import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const serverError = (props)=>{
	return <React.Fragment>{!!(props.error) && <Typography component="p" 
           color="error">
              <Icon color="error" 
              className={props.classes.error}>error</Icon>
              {props.error}</Typography>}
			</React.Fragment>
              };



export default serverError;