import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  value: {
    type: String,
    required:true
  }, 
  expireAt: {
    type: Date,
    default: new Date(Date.now()+(1000*60*60))
  }
})


export default mongoose.model('Token', TokenSchema)