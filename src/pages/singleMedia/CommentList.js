import React, {Component} from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectUser} from '../../store/states/user';
import {selectAllCommentsByMedia} from '../../store/states/comment';
import * as commentOperations from '../../store/states/comment/comment.operations';

import CommentForm from './commentList/CommentForm';
import CommentSingle from './commentList/CommentSingle';

class CommentList extends Component{
	


	componentDidMount = () =>{
		this.props.getComments(this.props.mediaId);
	}

	componentDidUpdate = (prevProps) =>{
		if(prevProps.mediaId != this.props.mediaId){
			this.props.getComments(this.props.mediaId);
		}
	}

	getRepliesByComment = (commentId) =>{
		this.props.getRepliesByComment(commentId);
	}

	
	render(){
		const {user,mediaId,comments} = this.props;
		console.log(comments);
	return (
		<div>
			{user && <CommentForm  user={user} media={mediaId}  />}
			{comments.length ? (
				comments.map(item=><CommentSingle key={item._id} parent={item._id}  getRepliesByComment={this.getRepliesByComment} comment={item}/>)
				) : <span>No comments to display</span>}

		</div>
	)
	}
}


const mapStateToProps = (state)=>{
  return {
    user:selectUser(state.user),
    comments:selectAllCommentsByMedia(state.comment)
  }
}

const boundActionCreators = (dispatch) => bindActionCreators({...commentOperations},dispatch);

export default connect(mapStateToProps,boundActionCreators)(CommentList);