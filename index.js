/**
*
*
*/
//dependencies
var server = require('./lib/server');
var workers = require('./lib/workers');

//declare the app
var app = {};

//init function
app.init = function(){
  //start the server
  server.init();

  //start the workers
  //workers.init();
};

console.log("messages are being sent to the console");

//execute
app.init();

//export the app
module.exports = app;

