import React from 'react';
import classes from './SubmitButton.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const submitButton = (props)=>{
const classes = [props.classes.submit];
const {formName,dispatch} = props;
if(props.processing){
	classes.push(classes.isProcessing)
}
	return (
		  <Button color="primary" variant="contained"
	                  type="submit" 
	           className={classes.join(' ')}>Submit</Button>
		)

}


export default submitButton;