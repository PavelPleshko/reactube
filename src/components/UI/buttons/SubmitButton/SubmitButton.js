import React from 'react';
import classes from './SubmitButton.css';
import Button from '@material-ui/core/Button';

const submitButton = (props)=>{
const classes = [props.classes.submit];
if(props.processing){
	classes.push(classes.isProcessing)
}
	return (
		  <Button color="primary" variant="contained"
	                  onClick={props.handleSubmit} 
	           className={classes.join(' ')}>Submit</Button>
		)

}


export default submitButton;