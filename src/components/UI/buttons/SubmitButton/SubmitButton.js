import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
  isProcessing:{
    opacity:'.7',
    cursor:'not-allowed'
  }
})

const submitButton = (props)=>{
const {classes,formName} = props;

let btnClasses = [];
if(props.processing){
	btnClasses.push(classes.isProcessing)
}
	return (
		  <Button color="primary" variant="contained"
	                  type="submit" 
	          >Submit</Button>
		)

}


export default withStyles(styles)(submitButton);