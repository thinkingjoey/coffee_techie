var mongoose = require('mongoose');

var eventSchema  = mongoose.Schema({
  fee: Number,
  imageUrl: String,
  title: String,
  eventType: String,
  lookingFor: String,
  hostId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
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
  created_at: Date
});

var Event = mongoose.model('Event', eventSchema)

module.exports = Event;
