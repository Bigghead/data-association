var mongoose = require('mongoose');

//connect mongoose
mongoose.connect('mongodb://localhost/blog_demo');

//Models
//Post Model
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Posts = mongoose.model('Posts', postSchema);


//User Model
var userSchema = new mongoose.Schema({
  email : String,
  name: String,
  posts: [postSchema]
  // posts: [
  //   {title: 'dfadfas', content: 'sdfafafadf'},
  //   {title: 'dfadfas', content: 'sdfafafadf'}
  // ]
});
var User = mongoose.model('User', userSchema);


// var newPost = new Posts({
//   title: 'This is a test',
//   content: 'I think I love Pepsi?'
// });
//
// newPost.save(function(err, result){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Successfully Added: ');
//     console.log(result);
//   }
// });

// var newUser = new User({
//   email : 'dodo@brown.edu',
//   name : 'Dodo'
// });
//
// newUser.save(function(err, result){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Successfully Added: ');
//     console.log(result);
//   }
// });
