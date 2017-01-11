var User = require('../models/users.js');
// var bodyParser = require('body-parser');

function login(req,res){

  if (req.body.email == undefined || req.body.password == undefined)
  {
    res.status(400).send('All fields are required');
  }
  else {

    console.log(req.body.email);
    console.log(req.body.password);
    // var query = User.findOne({ 'email': req.body.email });
    User.findOne({ 'email': req.body.email },'password', function (err, user) {
  if (err) return handleError(err);
    // console.log("find one, "+user)
  user.verifyPassword(req.body.password, function(err, valid) {
      if (err) {
        res.sendStatus(404);
      }else {
        console.log(valid ? "ValidAsync" : "InvalidAsync");
        res.sendStatus(200);
      }
    });
})

  }

}
function register(req,res) {
  if (req.body.name == undefined ||
      req.body.email == undefined ||
      req.body.password == undefined)
    {
      res.sendStatus(400);
    }
    else
    {
      var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // console.log(newUser);

      newUser.save(function(err ) {
        if (err, newUser) {
          if (err) {res.sendStatus(204);}
          if (!err){
            newUser.verifyPassword(req.body.password, function(err, valid) {
              if (!err)
              console.log(valid ? "Valid encryption" : "Invalid encryption"); //=>'ValidAsync'
            });
          }
        }
        console.log('User saved successfully!');
        res.sendStatus(200);

      });

}
}
exports.login = login;
exports.register =register;
