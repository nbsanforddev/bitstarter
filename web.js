var express = require('express');
var app = express.createServer(express.logger());
app.use(express.logger());
var fs = require('fs');
var filename = "./index.html";


app.get('/', function(request, response) {
    fs.exists(filename, function(exists){
	if(exists){
	    fs.stat(filename, "r", function(error, status){
		fs.open(filename, "r", function(error, fd){
		    var buffer = new Buffer(stats.size());

		    fs.readSync(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer){
			response.send(buffer.toString("utf-8", 0, buffer.length);
			fs.close(fd);

			console.log(error);
		    });
		});
	    });
	});
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
