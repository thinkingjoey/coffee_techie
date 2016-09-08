var mongoose = require('mongoose');

var eventSchema  = mongoose.Schema({
  fee: Number,
  imageUrl: String,
  title: String,
  eventType: String,
  hostId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  startTime: Date,
  endTime: Date,
  description: String,
  location: String,
  created_at: Date
});

var Event = mongoose.model('Event', eventSchema)

module.exports = Event;
