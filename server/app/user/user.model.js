import mongoose from 'mongoose';
import crypto from 'crypto';

const ObjectId = mongoose.Schema.ObjectId;
const mixedType = mongoose.Schema.Types.Mixed;

const HistoryEntrySchema = new mongoose.Schema({
  id:String,
  added:{
    type:Date,
    default:Date.now
  }
},{
  _id:false
})

const ContinueWatchingSchema = new mongoose.Schema({
  mediaId:String,
  fromTime:String,
  added:{
    type:Date,
    default:Date.now
  }
},{
  _id:false
})

const WatchlaterEntrySchema = new mongoose.Schema({
  id:String,
  added:{
    type:Date,
    default:Date.now
  }
},{
  _id:false
})

const InterestSchema = new mongoose.Schema({
  channelId:String,
  topicId:String,
  weight:{
    type:Number,
    default:0
    },
  updated:{
    type:Date,
    default:Date.now()
  }
  },{
    _id:false
  })

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'Name is required'
  }, 
  lastName: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  about: {
    type: String,
    trim: true
  },
  photo: {
    type:String
  },
  subscriptions: [{type: ObjectId, ref: 'User'}],
  subscribed: [{type: ObjectId, ref: 'Channel'}],
  continueWatching:[ContinueWatchingSchema],
  verified:{
    type:mixedType,
    default:false
  },
  history:[HistoryEntrySchema],
  watchlater:[WatchlaterEntrySchema],
  interests:[InterestSchema],
  saveHistory:{
    type:Boolean,
    default:true
  },
  hashed_password: {
    type: String,
    required: "Password is required"
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
})

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
  })

UserSchema.path('hashed_password').validate(function(v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required')
  }
}, null)

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },
  encryptPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return ''
    }
  },
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + ''
  }
}

export default mongoose.model('User', UserSchema)