'use strict';

import Tag from '../models/tag.model';

const listAll = (req,res,next)=>{
		Tag.find({}).exec((err,tags)=>{
		if(err){
			console.log(err);
			res.status(400).json({
				status:400,
				data:null,
				message:err
			});
		}else{
			res.status(200).json({
				status:200,
				data:tags
			});
		}
	})
} 

const create = (req,res,next)=>{
	let tag = new Tag(req.body);
	
	tag.save((err,tag)=>{
		if(err){
			console.log(err);
			res.status(400).json({
				status:400,
				data:null,
				message:err
			});
		}else{
			res.status(200).json({
				status:200,
				data:tag
			});
		}
	})
} 

export default {
	listAll,create
}











