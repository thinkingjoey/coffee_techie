var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  email: { type: String, required: true,
  unique: true},
  name: {type: String, required: true},
  username: String,
  password_hash: String,
  events: [{type: mongoose.Schema.Types.ObjectId, ref: 'event'}]
});



var User = mongoose.model('User', userSchema);
module.exports = User;
