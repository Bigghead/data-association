var mongoose = require('mongoose');

//connect mongoose
mongoose.connect('mongodb://localhost/blog_demo');

//Models
//User Model
var userSchema = new mongoose.Schema({
  email : String,
  name: String
});

var Users = mongoose.model('Users', userSchema);


//Post Model
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Posts = mongoose.model('Posts', postSchema);
