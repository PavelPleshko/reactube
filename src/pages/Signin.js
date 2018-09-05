import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userOperations from '../store/states/user/user.operations';
import {selectUserEmail,selectIsProcessing,selectErrorText} from '../store/states/user';

import SigninForm from './signin/SigninForm';


class Signin extends Component{

 clickSubmit = (formValue) => {
  this.props.login(formValue);
  }


 render() {
    const {location} = this.props;
    let from = location.from ? location.from : '/';
    return (
    	<div>   
         <SigninForm from={from} title="Sign in" initialData={{email:this.props.email || ''}}
          onSubmitForm={this.clickSubmit} serverError={this.props.error}
           processing={this.props.processing} />
    </div>
    )
  }
}

const boundActionCreators = (dispatch) => bindActionCreators(userOperations,dispatch);
const mappedStateToProps = (state) =>(
{
  processing:selectIsProcessing(state.user),
  email:selectUserEmail(state.user),
  error:selectErrorText(state.user)
}
  );



export default connect(mappedStateToProps,boundActionCreators)(Signin);