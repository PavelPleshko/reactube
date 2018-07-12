var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var TagSchema = new Schema({
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
}
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

TagSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'tags'
})

module.exports = mongoose.model('Tag', TagSchema);