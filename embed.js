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


// var newUser = new User({
//   email: 'hello@hello.com',
//   name: 'The Ice King'
// });
//
// //push new posts data into User.posts array
// newUser.posts.push(
//   {
//     title: 'How I Came To Be',
//     content: 'Story of the coldest dude in all of the land'
//   }
// );
//
// //and save everything into the db. It will save in blog_demo.users and blog_demo.users.posts for the pushed post
// newUser.save(function(err, result){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Successfully added: ');
//     console.log(result);
//   }
// });

// User.findOne({name : 'The Ice King'}, function(err, result){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(result);
//     //push new posts in result.posts
//     result.posts.push({
//       title: 'My Favorite Foods',
//       content: 'Random ramblings about the sun'
//     });
//
//     //don't forget to save
//     result.save(function(err, success){
//       if(err){
//         console.log(err);
//       } else {
//         console.log('Successful Add');
//       }
//     })
//   }
// });
