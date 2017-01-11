var mongoose   = require('mongoose');
var User    = require('./users.js');

exports.connect = function() {
  mongoose.connect('mongodb://localhost/webac');
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection');
  });
  mongoose.connection.on('error', function () {
    console.log('Mongoose error');
  });
}
