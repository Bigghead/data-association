var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Posts = mongoose.model('Posts', postSchema);

//remember to export this file out
module.exports = Posts;
