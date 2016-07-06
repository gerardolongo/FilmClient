 // load the express package and create our app
 var express = require('express');
 var app = express();
 var path = require('path');

 // send our index.html file to the user for the home page

 app.use(express.static(__dirname + '/../'));
 console.log(__dirname);
 app.get('*', function(request, response) {
     response.sendFile(path.join(__dirname + '/../index.html'));
 });

 // start the server
app.listen(1337);
console.log('1337 is the magic port!');
