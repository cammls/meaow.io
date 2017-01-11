var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
  name: String,
  email: String,
  // password: String
});

UserSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', UserSchema);

// make this available to our users in our Node applications
module.exports = User;
