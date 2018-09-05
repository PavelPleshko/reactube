import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {withStyles} from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

import { reduxForm,Field } from 'redux-form'
import {connect} from 'react-redux';
import { push } from 'connected-react-router/lib/actions';

import {selectIsProcessing,selectIsAuthenticated,selectUserFirstName} from '../../store/states/user';

import TextInput from './../../components/UI/controls/TextInput/TextInput';
import PasswordInput from './../../components/UI/controls/PasswordInput/PasswordInput';
import ServerError from './../../components/UI/errors/ServerError/ServerError';
import AnimatedSubmitButton from './../../components/UI/buttons/AnimatedSubmitButton/AnimatedSubmitButton';
import ProgressBar from './../../components/UI/bars/ProgressBar/ProgressBar';


const styles = theme => ({
  card: {
    maxWidth: 350,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingLeft:'2rem',
    paddingRight:'2rem',
    position:'relative'
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
    marginBottom: theme.spacing.unit * 2,
    backgroundColor:'yellow'
  },
   formControl: {
    margin: `${theme.spacing.unit*1.5}px 0 0 0`,
    width:'100%',
    textAlign:'left'
  },
  progress:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%'
  }
})

class SigninForm extends Component{

    
handleSubmit =(values)=>{ 
  this.props.onSubmitForm(values);
}

redirectAfterTimeout = () => {
    let {from} = this.props;
    this.props.dispatch(push(from));
}

	render(){
		const {classes,processing,authenticated,firstName} = this.props;
    
	return (
    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
		 <Card className={classes.card}>
     {authenticated && <div className={classes.progress}>
     <ProgressBar start={authenticated} onDone={this.redirectAfterTimeout} />
     </div>}
		     <CardContent>
         {!authenticated ? <React.Fragment>
            <ServerError error={this.props.serverError} classes={{error:classes.error}} />
			          <Typography type="headline" component="h2" 
			                      className={classes.title}>
			            {this.props.title}
			          </Typography>
                <Field type="email" label="Email *" name="email" component={TextInput}/>
                <Field label="Password *" name="password" component={PasswordInput}/>  
              </React.Fragment>
              : <div>
                <h3>Authentication successfull!</h3>
                <p>
                  Welcome back, <strong>{firstName}</strong>! Here you are again! 
                  You will be redirected shortly. 
                </p>
              </div>
          }              
	          </CardContent>
	            <CardActions>
	        <AnimatedSubmitButton loading={processing} type="submit"
           defaultText="Submit" done={authenticated} clicked={()=>{}}
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
  authenticated:selectIsAuthenticated(state.user),
  firstName:selectUserFirstName(state.user)
}
  );


export default connect(mappedStateToProps)(reduxForm({
  form: 'signinForm',
})(withStyles(styles)(SigninForm)));