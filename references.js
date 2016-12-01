var mongoose = require('mongoose');

//connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog_demo_2');

//Models
//import from post.js
var Posts = require('./models/post');
var User = require('./models/user');


// User.create({
//   email: 'hiAgain@hi.com',
//   name: 'Sauron'
// }, function(err, result){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Successfully Created : ' + result.name);
//   }
// });

// Posts.create({
//   title: 'Tips For A Successful Cookout',
//   content: 'How to choose the best meat for your burgers pt. 1'
// }, function(err, result){
//   if(err){
//     console.log(err);
//   } else {
//     //find a user that you want to add this post onto
//     User.findOne({name: 'Sauron'}, function(err, foundUser){
//       if(err){
//         console.log('Broken');
//       } else {
//         foundUser.posts.push(result);
//
//         //dont forget to save the new data
//         foundUser.save(function(err, data){
//           if(err){
//             console.log(err);
//           } else {
//             console.log('Successful Add: ' + data);
//           }
//         });
//       }
//     });
//   }
//   });


//find User
//find all posts by this user
