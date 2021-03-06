'use strict';
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
  f_name: {type: String, required: true},
  l_name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  token: String,
  home: Object,
  work: Object,
  created_at: {type: Date, default: Date.now, required: true},
  updated_at: {type: Date, default: Date.now, required: true}
});

userSchema.pre('save', function(next) {
  let user = this;
  bcrypt.genSalt(12, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hashedPassword) {
      if (err) return next(err);
      user.password = hashedPassword;
      next();
    });
  });
});

userSchema.methods.authenticate = function(password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
