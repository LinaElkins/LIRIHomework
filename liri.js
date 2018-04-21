js
require("dotenv").config();

//required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

//access my keys information
  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);