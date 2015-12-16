var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var UserSchema = new Schema ({
  email: String,
  password: String,
  //Pass in array of favorites?
  favorites: []
});

var UserModel = mongoose.model("User", UserSchema);
