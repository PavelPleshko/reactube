import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import { isDirty } from 'redux-form';
import {connect} from 'react-redux';

const styles = theme => ({
  iconBtn: {
    marginRight:12,
    color:theme.palette.primary.grey,

  },
  icon:{
 	fontSize:'1.05rem'
  },
  iconWrapper:{
  	display:'flex'
  },
  disabled:{
  	opacity:.9,
  	pointerEvents:'none'
  },
  greenBg:{
  	backgroundColor:theme.palette.primary.success,
  	color:'#ffffff',
  	'&:hover':{
  		  	backgroundColor:theme.palette.primary.successHover
  	}
  },
  redBg:{
  	backgroundColor:theme.palette.primary.error,
  	color:'#ffffff',
	'&:hover':{
  		  	backgroundColor:theme.palette.primary.errorHover
  	}
  }

});

class FileActions extends Component{



render(){
	 const { classes,formDirty } = this.props;

		return (
			<React.Fragment>
	        
	            <Button className={[classes.iconBtn,formDirty ? classes.greenBg : classes.disabled].join(' ')} variant='fab' mini>   
	            <span title='Save draft' className={classes.iconWrapper}>        
	            		<SaveIcon  className={classes.icon} />  
	            		</span>       
	            </Button>	          
	              <Button className={[classes.iconBtn,formDirty ? classes.redBg : classes.disabled].join(' ')} variant='fab' mini> 
	              	            <span title='Remove file' className={classes.iconWrapper}>        
           
	            		<DeleteIcon  className={classes.icon} />
	            		</span>	            
	            </Button>
	       
	          </React.Fragment>
			)
}
}

// const boundActionCreators = (dispatch) => bindActionCreators({...mediaOperations,
// 	...categoryOperations,...tagOperations},dispatch);
const mapStateToProps = (state)=>{
	let formDirty = isDirty('mediaInfo')(state);
	return {formDirty};
}

export default connect(mapStateToProps)(withStyles(styles)(FileActions));