import mongoose from 'mongoose';


const objectId = mongoose.Schema.ObjectId;

const MediaSchema = new mongoose.Schema({
 title: {
    type: String,
    required: 'Title is required'
  },
  description: String,
  category:  {
    type: objectId,
    ref:'Category',
    required: 'Category is required'
  },
  tags:[{type: objectId, ref: 'Tag'}],
  video_url:{
    type:String,
    required:'Video url is required'
  },
  duration:{
    type:Number,
    required:true
  },
  thumb_url:{
    type:String,
    required:true
  },
  channel:{
    type:objectId,
    required:false
  },
  views: {type: Number, default: 0},
  postedBy: {type: objectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
})



export default mongoose.model('Media', MediaSchema)