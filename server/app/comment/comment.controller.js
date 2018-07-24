'use strict';

import _ from 'lodash';
import mongoose from 'mongoose';
import Comment from '../comment/comment.model';
import Media from '../media/media.model';
import {sendError,sendSuccess} from '../../helpers/responseHandler';
const ObjectId = mongoose.Types.ObjectId;

const postComment = async (req,res,next)=>{
	try{
		for(let key in req.body){
			if(!req.body[key]){
				delete req.body[key];
			}
		}
		let comment = new Comment(req.body);
		comment.author = req.user._id;
		if(req.body.parent){
			await Comment.update({_id:req.body.parent},{$inc:{repliesCount:1}})
		};
		let newComment = await comment.save();
		let populatedComment = await Comment.populate(newComment,
			{path:'author',select: '_id firstName lastName'})

		sendSuccess(res,'Posted comment')({comment:populatedComment})
	}catch(err){
		sendError(res)(err);
	}
}


const getCommentsForMedia = async (req,res,next)=>{
	try{
		let comments = await Comment.find({media:req.params.mediaId,parent:{$exists:false}}).populate('author','_id firstName lastName');
		sendSuccess(res,'comments for media')({comments});
	}catch(err){
		sendError(res)(err);
	}
}


const getRepliesByComment = async (req,res,next)=>{
	try{
		let commentId = req.params.commentId;
		let replies = await Comment.find({parent:commentId}).populate('author','_id firstName lastName');
		sendSuccess(res,'replies for comment')({replies});
	}catch(err){
		sendError(res)(err);
	}
}


// module.exports.getById = function(req, res, next) {
// 	var id = req.params.commentId;
//    if (!ObjectId.isValid(id)) {
//     res.status(404).send({ message: 'Not found.'});
//   }

// Comment.findById(id)
// .populate(recordHelper.population('user'))
// .populate(recordHelper.population('replies'))
// .exec(function(err,comment){
//   if(err){
//     next(err);
//   }else if(comment){
//   	console.log(comment);
//    req.comment = comment;

//   next();
//   }else{
//     next(new Error('Failed to find comment'));
//   }

// })
// };

// module.exports.deleteComment = function(req,res,next){
// 	Comment.remove({_id:req.comment._id},function(err,deleted){
// 		if(err){
// 			throw err;
// 		}else{
// 			res.status(200).json(deleted);
// 		}
// 	});
// }


// module.exports.likeComment=function(req,res,next){
// var comment = req.comment;
// var idx = comment.likes.findIndex(function(id){
// 	return id == req.user._id.toString();
// })
// if(idx<0){
// 	comment.likes.push(req.user._id);
// 	comment.save(function(err,savedComment){
// 		if(err){
// 			res.json(err);
// 		}else{
// 			Comment.findById(savedComment._id)
// 			.populate(recordHelper.population('user'))
// 			.populate(recordHelper.population('replies')).exec(function(err,comment){
// 				console.log(comment);
// 				res.status(200).json(comment);
// 			})			
// 		}		
// 	})
// }else{
// 	res.status(500).json(new Error('It seems like the error occured that can be connected with the server...'))
// }


// }

const likeComment = async (req,res,next) =>{
	let commentId = req.body.commentId;
	let userId = req.user._id.toString();
	try{
		let comment = await Comment.findById(commentId);
		let isLiked = comment.likes.indexOf(userId);
   		let isDisliked = comment.dislikes.indexOf(userId);
   		if(isLiked >=0){
	      comment.likes.splice(isLiked,1);
	    }else{
	      comment.likes = [...comment.likes,userId];
	      if(isDisliked>=0)
	       comment.dislikes.splice(isDisliked,1);
	    }
	     let updatedComment = await comment.save();
	     updatedComment = await Comment.populate(updatedComment,
	     	{path:'author',select:'_id firstName lastName'});
	     sendSuccess(res,'comment liked')({comment:updatedComment})
	}catch(err){
		sendError(res)(err)
	}
}

const dislikeComment = async (req,res,next) =>{
	let commentId = req.body.commentId;
	let userId = req.user._id.toString();
	try{
		let comment = await Comment.findById(commentId);
		let isLiked = comment.likes.indexOf(userId);
   		let isDisliked = comment.dislikes.indexOf(userId);
   		if(isDisliked >=0){
	      comment.dislikes.splice(isDisliked,1);
	    }else{
	      comment.dislikes = [...comment.dislikes,userId];
	      if(isLiked>=0)
	       comment.likes.splice(isLiked,1);
	    }
	     let updatedComment = await comment.save();
	     updatedComment = await Comment.populate(updatedComment,
	     	{ path: 'author', select: '_id firstName lastName' });
	     sendSuccess(res,'comment liked')({comment:updatedComment})
	}catch(err){
		sendError(res)(err)
	}
}

// module.exports.unlikeComment=function(req,res,next){
// 	var comment = req.comment;
// 	var userId = req.user._id.toString();

// 	var idx = comment.likes.findIndex(function(id){
// 		return id == userId;
// 	})
// 	if(idx >= 0){
// 		comment.likes.splice(idx,1);
// 		comment.save(function(err,savedComment){
// 			if(err){
// 				res.json(err);
// 			}else{
// 				res.status(200).json(savedComment);
// 			}
// 		});
// 	}else{
// 		res.status(500).json(new Error('Internal server error occured'));
// 	}
// }


export default {
	postComment,
	getCommentsForMedia,
	getRepliesByComment,
	likeComment,dislikeComment
}



