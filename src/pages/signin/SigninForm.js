import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import {withStyles} from '@material-ui/core/styles';

import { reduxForm,Field } from 'redux-form'

import TextInput from './../../components/UI/controls/TextInput/TextInput';
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
   formControl: {
    margin: `${theme.spacing.unit*1.5}px 0 0 0`,
    width:'100%',
    textAlign:'left'
  },
})

class SigninForm extends Component{


    componentWillMount(){
      let initData = this.props.initialData;
     
    }

    
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
  form: 'signinForm',
})(withStyles(styles)(SigninForm));