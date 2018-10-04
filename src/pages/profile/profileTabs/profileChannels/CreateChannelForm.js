import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { Field } from 'redux-form'

//material ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import GradientButton from '../../../../components/UI/buttons/GradientButton/GradientButton';
import TextInput from '../../../../components/UI/controls/TextInput/TextInput';
import SelectInput from '../../../../components/UI/controls/SelectInput/SelectInput';



const styles = theme =>({
	card:{
			padding:'1rem 2.5rem',
			marginBottom:'.5rem',
			overflow:'visible'		
		},
	buttonCreate:{
		marginTop:'1rem',
		position:'relative',
		display:'block'
	},
	rightIcon:{
		marginLeft:'1rem'
	},
	header:{
		padding:'.3rem 2.5rem',
		marginBottom:'.5rem',
		display:'flex'
	},
	header2:{
		color:theme.palette.primary.grey,
		borderBottom:`1px dashed ${theme.palette.primary.lightGrey}`
	}
});

class CreateChannelForm extends Component{


handleSubmit =(values)=>{	
	console.log(values);
	//this.props.submitForm(values);
}

	render(){
		const {classes,submitBtnText='create channel'} = this.props;

	return (
		<form onSubmit={ this.props.handleSubmit(this.handleSubmit) }>		
			 		     		         
				<Field label="Title*" required helperText="Displayed title" name="title" component={TextInput}/>
				<Field label="Description*" required helperText="Shortly describe your channel" multiline={true} name="description"component={TextInput}/>
				<Field label="Topic*" required name="topic" component={SelectInput} options={[]} />
			
			
		      <Button type="submit" variant="contained" color="primary" classes={{root:classes.buttonCreate}}>		
					{submitBtnText}
		      </Button>
		</form>
		
	)
	}
}



export default reduxForm({
  form: 'createChannel'
})(withStyles(styles)(CreateChannelForm));