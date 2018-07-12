import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TextInput from './../../../components/UI/controls/TextInput/TextInput';
import RadioInput from './../../../components/UI/controls/RadioInput/RadioInput';
import PasswordInput from './../../../components/UI/controls/PasswordInput/PasswordInput';
import ServerError from './../../../components/UI/errors/ServerError/ServerError';

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
   group: {
    margin:0,
    display:'flex',
    flexDirection:'row'
  },
   formControl: {
    margin: `${theme.spacing.unit*1.5}px 0 0 0`,
    width:'100%',
    textAlign:'left'
  },
})

class SignupForm extends Component{
	state = {
      firstName: '',
      lastName:'',
      gender:'female', 
      password: '',
      email: '',
      valid:false
   }

    handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })

    }

    handleSubmit = event =>{
      let formValue = this.state;
      this.props.handleSubmit(formValue);
    }


	render(){
		const {classes} = this.props;
	return (
		 <Card className={classes.card}>
		     <CardContent>
         <ServerError error={this.props.serverError} classes={{error:classes.error}} />
			          <Typography type="headline" component="h2" 
			                      className={classes.title}>
			            {this.props.title}
			          </Typography>
		               <Grid container spacing={24}>
				            <Grid item xs={6}>
				             	<TextInput value={this.state.firstName} label="First name *"
				             	classes={{textField:classes.textField}} handleChange={this.handleChange('firstName')}
				             	 />
				             </Grid>
				             <Grid item xs={6}>
				             <TextInput value={this.state.lastName} label="Last name *"
				             	classes={{textField:classes.textField}} handleChange={this.handleChange('lastName')}
				             	 />
				              </Grid>
				         </Grid>
				         <RadioInput value={this.state.gender} label="Gender"
				         classes={{formControl:classes.formControl,group:classes.group}}
				         handleChange={this.handleChange('gender')} 
				         options={[
				         	{value:'male',label:'Male'},
				         	{value:'female',label:'Female'},
				         	]} />

				         <TextInput 
                     type="email" label="Email *" 
    				         value={this.state.email}
                     classes={{textField:classes.textField}}
                     handleChange={this.handleChange('email')}/>

                  <PasswordInput
                        value={this.state.password} 
                        classes={{formControl:classes.formControl}}
                        handleChange={this.handleChange('password')}/>
                       
	          </CardContent>
	            <CardActions>
	          <Button color="primary" variant="contained"
	                  onClick={this.handleSubmit} 
	           className={classes.submit}>Submit</Button>
	        </CardActions>
          </Card>

	)
	}
}


export default withStyles(styles)(SignupForm);