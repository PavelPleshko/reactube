'use strict';

import Tag from './tag.model';
import {throwIfNoResult,sendSuccess,sendError,throwError} from '../../helpers/responseHandler';

const listAll = async (req,res,next)=>{
	try{
		const tags = await Tag.find({});
		sendSuccess(res,'List of tags')({tags});
	}catch(err){
		sendError(res)(error);
	}

} 

const create = async (req,res,next)=>{
	let tag = new Tag(req.body);
	try{
		let newTag = await tag.save();
		sendSuccess(res,'Tag created')({newTag});
	}catch(error){
		sendError(res)(error);
	}
} 

export default {
	listAll,create
}











