import React,{Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commentOperations from '../../../store/states/comment/comment.operations';

import UserAvatarSmall from '../../../components/UI/miscellaneous/UserAvatarSmall/UserAvatarSmall';
import LikeActions from '../../../components/UI/miscellaneous/LikeActions/LikeActions';
import CommentForm from './CommentForm';

const styles = theme => ({
	root:{
		display:'flex',
		marginBottom:'.8rem',
		fontSize: '.8rem'
	},
	meta:{
		display:'flex',
		
	},
	body:{
		width:'100%'
	},
	date:{
		color:theme.palette.primary.lightGrey,
		marginLeft:'1rem'
	},
	content:{
		margin:'.4rem .4rem .4rem 0'
	},
	footer:{
		display:'flex',
		alignItems:'center'
	},
	showReplies:{
		fontWeight:600,
		'&:hover':{
			textDecoration:'underline',
			cursor:'pointer'
		}
	}
})

class CommentSingle extends Component{

	state={
		replyOpened:false,
		showReplies:false
	}

	openReplyForm = () =>{
		this.setState({replyOpened:true});
	}

	closeReplyForm = () =>{
		this.setState({replyOpened:false});
	}

	showReplies = () =>{
		this.setState({
			showReplies:true
		})
		this.props.getRepliesByComment(this.props.comment._id);
	}

	hideReplies = () =>{
		this.setState({
			showReplies:false
		})
	}

	liked = () =>{
		this.props.likeUserComment(this.props.comment._id);
	}

	disliked = () =>{
		this.props.dislikeUserComment(this.props.comment._id);
	}

	render(){
			const {comment,classes,parent} = this.props;
			const repliesExist = comment.repliesCount>0;
	return (
			<div className={classes.root}>
				<UserAvatarSmall user={comment.author} />
				<div className={classes.body}>
					<div className={classes.meta}>
						<strong>{comment.author.firstName+ ' ' + comment.author.lastName}</strong>
						<span className={classes.date}>{comment.created}</span>
					</div>
					<p className={classes.content}>{comment.content}</p>
					<div className={classes.footer}>
						<LikeActions liked={this.liked} disliked={this.disliked} likes={comment.likes} dislikes={comment.dislikes} />
						<Button color="default" size="small" onClick={this.openReplyForm}>Reply</Button>
					</div>
					{this.state.replyOpened && 

					<CommentForm to={comment.author._id} replyTo={comment.author.lastName} media={comment.media}
					 parent={parent} close={this.closeReplyForm} />
					}

					 { repliesExist && 
					 	(this.state.showReplies ? 
					 	<React.Fragment>
					 	<span className={classes.showReplies} onClick={this.hideReplies}>Hide replies</span>
					 	{
					 	comment.children.map((item)=>
					 	<CommentSingle key={item._id} classes={classes} comment={item} parent={parent} />)
					 	}
					 </React.Fragment>
					 : <span className={classes.showReplies} onClick={this.showReplies}>Show all replies ({comment.repliesCount})</span>
					)}
				</div>
			</div>
		)
	}

}


const boundActionCreators = (dispatch) => bindActionCreators({...commentOperations},dispatch);



export default connect(null,boundActionCreators)(withStyles(styles)(CommentSingle));