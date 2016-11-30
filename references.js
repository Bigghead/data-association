var mongoose = require('mongoose');

//connect mongoose
mongoose.connect('mongodb://localhost/blog_demo_2');

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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Posts'
    }
  ]
});
var User = mongoose.model('User', userSchema);


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

Posts.create({
  title: 'My Wealth',
  content: 'How much money they pay me to troll Hobits'
}, function(err, result){
  if(err){
    console.log(err);
  } else {
    //find a user that you want to add this post onto
    User.findOne({name: 'Sauron'}, function(err, foundUser){
      if(err){
        console.log('Broken');
      } else {
        foundUser.posts.push(result);

        //dont forget to save the new data
        foundUser.save(function(err, data){
          if(err){
            console.log(err);
          } else {
            console.log('Successful Add: ' + data);
          }
        });
      }
    });
  }
  });