var mongoose = require('mongoose');

//User Model
var userSchema = new mongoose.Schema({
  email : String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Posts'
    }
  ]
});
var User = mongoose.model('User', userSchema);

module.exports = User;
