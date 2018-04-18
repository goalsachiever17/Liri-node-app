require("dotenv").config();
var keys= require('./key.js')


var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var fs = require('fs');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var params = {screen_name: 'Reb Mcdan'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0]);
    for(var i =0; i<tweets.length;i++)
    {
    	console.log(tweets[i].created_at);
console.log(tweets[i].text);
    }


  }
  else{
  	console.log(error);
  }
});