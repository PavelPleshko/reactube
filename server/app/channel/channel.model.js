import mongoose from 'mongoose';
import slug from 'slug';

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
    type: ObjectId,
    ref: 'ChannelTopic'
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
  slug:{
    type:String,
    required:true
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

ChannelSchema.pre('save',function(next){
  this.slug = slug(`${this.title}${this.created}`);
  if(this.slug) 
      return next();
  throw new Error('Didnt save this time');

})

export default mongoose.model('Channel', ChannelSchema);