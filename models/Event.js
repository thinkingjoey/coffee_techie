var mongoose = require('mongoose');

var eventSchema  = mongoose.Schema({
  fee: String,
  imageUrl: String,
  title: String,
  eventType: String,
  hostId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  startTime: String,
  endTime: String,
  description: String,
  location: String,
  created_at: String
});

var Event = mongoose.model('Event', eventSchema)

module.exports = Event;
