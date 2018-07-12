import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../store/states/user/user.actions';
import {selectUserEmail,selectIsProcessing,selectErrorText} from '../store/states/user';

import SigninForm from './signin/SigninForm/SigninForm';


class Signin extends Component{

 clickSubmit = (formValue) => {
  this.props.login(formValue);
  }


 render() {
    return (
    	<div>   
         <SigninForm title="Sign in" initialData={{email:this.props.email || ''}}
          handleSubmit={this.clickSubmit} serverError={this.props.error}
           processing={this.props.processing} />
    </div>
    )
  }
}

const boundActionCreators = (dispatch) => bindActionCreators(userActions,dispatch);
const mappedStateToProps = (state) =>(
{
  processing:selectIsProcessing(state.user),
  email:selectUserEmail(state.user),
  error:selectErrorText(state.user)
}
  );



export default connect(mappedStateToProps,boundActionCreators)(Signin);