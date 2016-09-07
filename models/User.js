var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: String,
  password_hash: String,
  events: [{type: mongoose.Schema.Types.ObjectId, ref: 'event'}]
});



var User = mongoose.model('User', userSchema);
module.exports = User;
