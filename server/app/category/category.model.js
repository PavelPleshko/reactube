import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
title:{
  type:String,
  required:'Title is required',
  unique:'Category already exists',
  lowercase:true
 },
createdAt:{
  type:Date,
  default:Date.now()
}
});




export default mongoose.model('Category', CategorySchema);


