import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.ObjectId;

const ChannelSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: 'Title already exists',
    required: 'Title is required'
  }, 
  description: {
    type: String,
    trim: true,
    required: 'Description is required'
  },
  topic: {
    type: String,
    trim: true
  },
  iconImage:{
    type:String
  },
  backgroundImage: {
    type:String
  },
  subscribers: [{type: ObjectId, ref: 'User'}],
  medias: [{type: ObjectId, ref: 'Media'}],
  //TODO playlists
  owner:{
    type:ObjectId,
    ref:'User'
  },
  verified:{
    type:Boolean,
    default:false
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Channel', ChannelSchema);