import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = theme => ({
  success: {
    color: theme.palette.primary.success,
  },
  error: {
    color: theme.palette.primary.error,
  },
  info: {
    color: theme.palette.primary.light,
  },
  warning: {
    color: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

const snackbar = (props) => {
  const { classes, className, message,onClose, variant="success", open=false,duration=4000 } = props;
  const Icon = variantIcon[variant];
  return (
  	<Snackbar
  	 open={open}
  	 onClose={onClose}
  	 autoHideDuration={duration}
  	>
	    <SnackbarContent
	    style={{bakgroundColor:'rgba(0,0,0,.7)'}}
	      className={classNames(classes[variant], className)}
	      aria-describedby="client-snackbar"
	      message={
	        <span id="client-snackbar" className={classes.message}>
	          <Icon className={classNames(classes.icon, classes.iconVariant)} />
	          {message}
	        </span>
	      }
	      action={[
	        <IconButton
	          key="close"
	          aria-label="Close"
	          color="inherit"
	          className={classes.close}
	         onClick={onClose}
	        >
	          <CloseIcon className={classes.icon} />
	        </IconButton>,
	      ]}
	    />
    </Snackbar>
  );
}


export default withStyles(styles)(snackbar);