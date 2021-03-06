// tweet.js - a collection of tweets

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TweetSchema = new Schema({
   message : String,
   reps: [{
      id : {
         type: ObjectId,
         ref: 'Rep'
      },
      tweetId: String,
      error: Schema.Types.Mixed
   }],
   user: {
      type: ObjectId,
      ref: 'User'
   },
   state: String,
   created: { type: Date, default: Date.now }
}, {
   collection: "tweets"
});

module.exports = mongoose.model("Tweet", TweetSchema);