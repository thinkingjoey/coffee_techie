var mongoose = require('mongoose');

var eventSchema  = mongoose.Schema({
  fee: Number,
  imageUrl: String,
  title: String,
  eventType: String,
  lookingFor: String,
  hostImgUrl: String,
  hostId: {type: Schema.Types.ObjectId, ref: 'User'}

  eventDate: Date,
  startTime: Date,
  endTime: Date,
  description: String,

  address: {
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: Number
  },
  created_at: Date,
  updated_at: Date,
});

var Event = mongoose.model('Event', eventSchema)

module.exports = Event;
