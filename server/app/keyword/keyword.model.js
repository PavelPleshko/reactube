import mongoose from 'mongoose';


const objectId = mongoose.Schema.ObjectId;

const KeywordSchema = new mongoose.Schema({
 text: {
    type: String,
    required: 'Keyword text is required',
    unique:'Keyword text has to be unique'
  }, 
  postedBy: {type: objectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }
})



export default mongoose.model('Keyword', KeywordSchema)