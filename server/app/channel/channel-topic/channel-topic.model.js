import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.ObjectId;

const ChannelTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    unique: 'Title already exists',
    required: 'Title is required'
  }, 
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('ChannelTopic', ChannelTopicSchema);