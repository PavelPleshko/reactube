import React, {Component} from 'react';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userOperations from '../store/states/user/user.operations';
import {selectUserEmail,selectUserFullname,
  selectIsProcessing,selectErrorText} from '../store/states/user';
//material ui
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import SignupForm from './signup/SignupForm';
import DialogWithType from '../components/UI/dialogs/DialogWithType/DialogWithType';


class Signup extends Component{
	
state = {
  submitted:false
}



clickSubmit = (formValue) => {
  this.props.register(formValue);
  this.setState({submitted:true})
  }


 render() {
    return (
    	<div>   
         <SignupForm title="Sign up" onSubmitForm={this.clickSubmit} serverError={this.state.submitted && this.props.error} />
          
          <DialogWithType open={!!(this.props.email) && this.state.submitted}
          title="Registration successful"
          linkToPage="/signin"
          actionBtnText="Sign in"
          type="success">
                 Thank you <strong>{this.props.fullName}</strong>!<br />
                 A verification email was sent to <strong>{this.props.email}</strong>
          </DialogWithType>   
     </div>
    )
  }
}

const boundActionCreators = (dispatch) => bindActionCreators(userOperations,dispatch);
const mappedStateToProps = (state) =>(
{
  processing:selectIsProcessing(state.user),
  fullName:selectUserFullname(state.user),
  email:selectUserEmail(state.user),
  error:selectErrorText(state.user)
}
  );



export default connect(mappedStateToProps,boundActionCreators)(Signup);