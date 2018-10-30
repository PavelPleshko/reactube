import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';

import { reduxForm,Field } from 'redux-form'
import {connect} from 'react-redux';

import {selectIsProcessing,selectUserFirstName} from '../../store/states/user';

import TextInput from './../../components/UI/controls/TextInput/TextInput';
import RadioInput from './../../components/UI/controls/RadioInput/RadioInput';
import PasswordInput from './../../components/UI/controls/PasswordInput/PasswordInput';
import ServerError from './../../components/UI/errors/ServerError/ServerError';
import AnimatedSubmitButton from './../../components/UI/buttons/AnimatedSubmitButton/AnimatedSubmitButton';


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
  }
})

class SignupForm extends Component{

handleSubmit =(values)=>{ 
  this.props.onSubmitForm(values);
}



	render(){
		const {classes,firstName,processing,title} = this.props;
	return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
  		 <Card className={classes.card}>
  		     <CardContent>
         
           <ServerError error={this.props.serverError} classes={{error:classes.error}} />
  			          <Typography type="headline" component="h2" 
  			                      className={classes.title}>
  			            {title}
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
      	        <AnimatedSubmitButton loading={processing} type="submit"
                 defaultText="Submit" done={!!firstName} clicked={()=>{}}
                doneIcon={<CheckIcon style={{fontSize:'2rem'}} />}
               />
  	        </CardActions>
            </Card>
          </form>

	)
	}
}

const mappedStateToProps = (state) =>(
{
  processing:selectIsProcessing(state.user),
  firstName:selectUserFirstName(state.user)
}
  );


export default connect(mappedStateToProps)(reduxForm({
  form: 'signupForm',
})(withStyles(styles)(SignupForm)));