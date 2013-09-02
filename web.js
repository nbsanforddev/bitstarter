var express = require('express');
var app = express.createServer(express.logger());
app.use(express.logger());
var fs = require('fs');
var buf = new Buffer(256);

fs.readSync('./index.html',buf,256,0);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
