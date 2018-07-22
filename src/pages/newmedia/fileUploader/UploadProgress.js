import React from 'react';
import classNames from 'classNames';
import PropTypes from 'prop-types';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import Error from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

 const styles = theme =>({
   wrapper: {
    margin: '1rem',
    position: 'relative',
    display:'inline'
    },
  buttonSuccess: {
    backgroundColor: theme.palette.primary.success,
    pointerEvents:'none'
  },
  fabProgress :{
    color: theme.palette.primary.success,
    position:'absolute',
    top: -4.5,
    left: -6,
    zIndex: 1,
    transition:'.2s'
  },
  buttonProgress :{
    color: theme.palette.primary.success,
    position:'absolute',
    top: '50%',
    left:'50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonStandard:{
    backgroundColor: theme.palette.primary.standard,
    '&:hover':{
      backgroundColor: theme.palette.primary.standardHover
    }
  },
  button:{
    marginLeft:'.5rem',
    color:'#fff'
  },

  disabled:{
    backgroundColor:'#ccc',
    color:'#eeeeee',
    pointerEvents:'none'
  },
  buttonError:{
    backgroundColor:theme.palette.primary.error,
    '&:hover':{
      backgroundColor: theme.palette.primary.errorHover
    }
  }})

const statusMap = {
  'disabled':{
    buttonClassName:'disabled',
    buttonText:'No file selected',
    buttonIcon:<CloudUploadIcon />
  },
  'active':{
    buttonClassName:'buttonStandard',
    buttonText:'Start upload',
    buttonIcon:<CloudUploadIcon />
  },
  'loading':{
    buttonClassName:'buttonStandard',
    buttonText:'Uploading now',
    buttonIcon:<CloudUploadIcon />
  },
  'success':{
    buttonClassName:'buttonSuccess',
    buttonText:'Finished',
    buttonIcon:<CheckIcon />
  },
  'error':{
    buttonClassName:'buttonError',
    buttonText:'Try again',
    buttonIcon:<Error />
  }
}
const uploadProgress = ({classes,progress,startUploading,status})=>{

  const displayOptions = statusMap[status];
  const btnClassnames = classNames({
              [classes.button]:true,
  			      [classes[displayOptions.buttonClassName]]:true
    			  });

    return (
    	  <div className={classes.wrapper}>
              <Button
                variant="fab"
                className={btnClassnames}>
                   {displayOptions.buttonIcon}
                   {status =='loading' && (<CircularProgress size={66} variant="determinate" value={progress} className={classes.fabProgress} />)}
              </Button>
                
              <Button
                variant="contained"
                onClick={startUploading}
                className={btnClassnames}
                >
                {displayOptions.buttonText}
              </Button>
         </div>
    	)
}

uploadProgress.propTypes = {
  status: PropTypes.string.isRequired
};

export default withStyles(styles)(uploadProgress);