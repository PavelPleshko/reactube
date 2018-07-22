import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TextInput from '../../../components/UI/controls/TextInput/TextInput';
import UserAvatarSmall from '../../../components/UI/miscellaneous/UserAvatarSmall/UserAvatarSmall';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectUser} from '../../../store/states/user';
import * as commentOperations from '../../../store/states/comment/comment.operations';

const styles = theme => ({
	root:{
		display:'flex',
		width:'100%',
		alignItems:'center'
	},
	container:{
		width:'100%'
	},
	buttonGroup:{
		display:'flex',
		justifyContent:'flex-end'
	},
	button:{
		marginRight:'1rem'
	}
})

class CommentForm extends Component{
	
	state={
		content:''
	};
	
	componentWillMount = () =>{
		let replyTo = this.props.replyTo || '';
		if(replyTo){
			replyTo = `@${replyTo}, `;
		}
		this.setState({
			content:replyTo
		})
	}

	onChangeHandler = (e) =>{
		this.setState({content:e.target.value})
	}

	submitForm = () =>{
		this.props.postNewComment({
			content:this.state.content,
			media:this.props.media,
			parent:this.props.parent || '',
			to:this.props.to
		},!!(this.props.to));
		if(this.props.replyTo){
			this.props.close();
		}else{
			this.clear();
		}
	
	}

	clear = () =>{
		this.setState({content:''})
	}

	render(){
		let {classes,user,close=this.clear} = this.props;

		
		return user && <div className={classes.root}>
				<UserAvatarSmall user={user} />
				<div className={classes.container}>
					<TextInput input={{value:this.state.content,onChange:this.onChangeHandler}}/>
					<div className={classes.buttonGroup}>
						<Button variant="raised" color="default" className={classes.button} onClick={close}>Cancel</Button>
						<Button variant="contained" color="primary" disabled={this.state.content.length < 10} onClick={this.submitForm}>Leave comment</Button>
					</div>
				</div>
			</div>
		}
}

const mapStateToProps = (state)=>{
  return {
    user:selectUser(state.user),
  }
}
const boundActionCreators = (dispatch) => bindActionCreators({...commentOperations},dispatch);


export default connect(mapStateToProps,boundActionCreators)(withStyles(styles)(CommentForm));