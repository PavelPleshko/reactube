import mongoose from 'mongoose';


const objectId = mongoose.Schema.ObjectId;

const CommentSchema = new mongoose.Schema({
 content: {
    type: String,
    required: 'Content is required'
  },
  author: {
    type: objectId,
     ref: 'User'
  },
  media:{
    type:objectId,
    ref:'Media'
  },
  parent:{
    type:objectId,
    ref:'Comment'
  },
  to:{
    type:objectId,
    ref:'User'
  },
  created: {
    type: Date,
    default: Date.now
  },
  repliesCount:{
    type:Number,
    default:0
  },
  children:{
    type:Array,
    default:[]
  }

})



export default mongoose.model('Comment', CommentSchema)