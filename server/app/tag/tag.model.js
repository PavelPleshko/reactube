import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
 title:{
  type:String,
  required:'Title is required',
  unique:'Title already exists',
  lowercase:true
 },

createdAt:{
  type:Date,
  default:Date.now(),
  required:true
}
});


export default mongoose.model('Tag', TagSchema);