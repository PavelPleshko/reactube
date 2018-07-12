var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var CategorySchema = new Schema({
 title:{
  type:String,
  required:true,
  unique:true,
  lowercase:true
 },

createdAt:{
  type:Date,
  default:Date.now(),
  required:true
},

author:{
  type:ObjectId,
 ref:'User'
}
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

CategorySchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'category'
})


module.exports = mongoose.model('Category', CategorySchema);


