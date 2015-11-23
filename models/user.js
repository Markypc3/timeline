'use strict';
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
  f_name: {type: String, required: true},
  l_name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  home: Object,
  work: Object,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  let user = this;
  bcrypt.genSalt(12, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
      if (err) return next(err);
      user.password = hashedPassword;
      next();
    })
  })
})

let User = mongoose.model('User', userSchema);
module.exports = User;
