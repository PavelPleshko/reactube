import React, {Component} from 'react';
import { reduxForm } from 'redux-form'
//material ui
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MainInfoForm from './fileMetaForm/MainInfoForm';
import AdditionalInfoForm from './fileMetaForm/AdditionalInfoForm';
import GradientButton from '../../components/UI/buttons/GradientButton/GradientButton';



const styles = theme =>({
	root:{
		backgroundColor:'#fff'
	},
	card:{
			padding:'1rem 2.5rem',
			overflow:'visible'		
		},
	buttonCreate:{
		color:'#fff',
		backgroundColor:theme.palette.primary.active
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

class FileMetaForm extends Component{


handleSubmit =(values)=>{	
	this.props.submitForm(values);
}

	render(){
		const {classes,submitBtnText,media} = this.props;
	return (
		<form className={classes.root} onSubmit={ this.props.handleSubmit(this.handleSubmit) }>		
			  <div className={classes.card}>				
					<MainInfoForm media={media}/>				
			  </div>
			  <div className={classes.card}>			     		         
					<AdditionalInfoForm media={media}/>					
			  </div>
			
		      <GradientButton gradientColor={'#00F260'} type="submit" classes={{btn:classes.buttonCreate}} borderRadius="0">		
					{submitBtnText}
		      </GradientButton>
		</form>
		
	)
	}
}



export default reduxForm({
  form: 'mediaInfo'
})(withStyles(styles)(FileMetaForm));