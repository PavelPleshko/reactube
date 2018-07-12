import mongoose from 'mongoose';



const MediaSchema = new mongoose.Schema({
 title: {
    type: String,
    required: 'Title is required'
  },
  description: String,
  category:  {
    type: String,
    required: 'Category is required'
  },
  views: {type: Number, default: 0},
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
})



export default mongoose.model('Media', MediaSchema)