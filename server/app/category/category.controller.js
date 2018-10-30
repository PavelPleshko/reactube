'use strict';

import _  from 'lodash';
import Category from './category.model';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const listAll = (req,res,next)=>{
	Category.find({}).exec(function(err,categories){
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
				data:categories
			});
		}
	})
} 




const create = (req,res,next)=>{
	let category = new Category(req.body);

	category.save((err,category)=>{
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
				data:category
			});
		}
	})
} 


export default {
	create,listAll
}








