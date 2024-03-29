const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  bio: String,
  image: String,
  password: String,
});

module.exports = mongoose.model('Users', userSchema);
