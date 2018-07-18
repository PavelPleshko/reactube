import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { reduxForm,Field } from 'redux-form'

import TextInput from './../../components/UI/controls/TextInput/TextInput';
import RadioInput from './../../components/UI/controls/RadioInput/RadioInput';
import PasswordInput from './../../components/UI/controls/PasswordInput/PasswordInput';
import ServerError from './../../components/UI/errors/ServerError/ServerError';
import SubmitButton from './../../components/UI/buttons/SubmitButton/SubmitButton';

const styles = theme => ({
  card: {
    maxWidth: 350,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingLeft:'2rem',
    paddingRight:'2rem'
  },
  error: {
    verticalAlign: 'middle',
    marginRight:'.5rem'
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle,
    fontWeight:'300',
    fontSize:'1.3rem'
  },
  textField: {
    margin:`0 .8rem 0 .8rem`,
    fontSize:'.8rem',
    width:'100%'
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  },
 
})

class SignupForm extends Component{

handleSubmit =(values)=>{ 
  this.props.onSubmitForm(values);
}


	render(){
		const {classes} = this.props;
	return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
  		 <Card className={classes.card}>
  		     <CardContent>
           <ServerError error={this.props.serverError} classes={{error:classes.error}} />
  			          <Typography type="headline" component="h2" 
  			                      className={classes.title}>
  			            {this.props.title}
  			          </Typography>
  		               <Grid container spacing={24}>
  				            <Grid item xs={6}>
                          <Field label="First name *" name="firstName" component={TextInput}/>
  				             </Grid>
  				             <Grid item xs={6}>
                          <Field label="Last name *" name="lastName" component={TextInput}/>
  				             </Grid>
  				         </Grid>

                   <Field label="Gender" name="gender" component={RadioInput} options={[
                     {value:'male',label:'Male'},
                     {value:'female',label:'Female'},
                     ]} />

        				  <Field type="email" label="Email *" name="email" component={TextInput}/>
                  <Field label="Password *" name="password" component={PasswordInput}/>                

                         
  	          </CardContent>
  	            <CardActions>
      	           <SubmitButton processing={this.props.processing} 
                    classes={{submit:classes.submit}}
                   />
  	        </CardActions>
            </Card>
          </form>

	)
	}
}


export default reduxForm({
  form: 'signupForm',
})(withStyles(styles)(SignupForm));