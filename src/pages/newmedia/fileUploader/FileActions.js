import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import MoreVert from '@material-ui/icons/MoreVert';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    height: 380,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

const actions = [
  { icon: <SaveIcon />, name: 'Save draft' },
  { icon: <DeleteIcon />, name: 'Cancel' }
];

class FileActions extends Component{

state = {
    open: false
  };



handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

render(){
	 const { classes } = this.props;
	 const { open } = this.state;

		return (
			 <SpeedDial
	          ariaLabel="SpeedDial openIcon example"
	          className={classes.speedDial}
	          icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
	          onBlur={this.handleClose}
	          onClose={this.handleClose}
	          onFocus={this.handleOpen}
	          onMouseEnter={this.handleOpen}
	          onMouseLeave={this.handleClose}
	          open={open}
	        >
	          {actions.map(action => (
	            <SpeedDialAction
	              key={action.name}
	              icon={action.icon}
	              tooltipTitle={action.name}
	              onClick={this.handleClick}
	            />
	          ))}
	        </SpeedDial>
			)
}
}


export default withStyles(styles)(FileActions);