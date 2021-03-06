var express = require('express');
var app = express.createServer(express.logger());
app.use(express.logger());
var fs = require('fs');
var filename = "./index.html";


/*app.get('/', function(request, response) {
    fs.exists(filename, function(exists){
	if(exists){
	    fs.stat(filename, "r", function(error, status){
		fs.open(filename, "r", function(error, fd){
		    var buffer = new Buffer(stats.size());

		    fs.readSync(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer){
			var data = buffer.toString("utf-8", 0, buffer.length);
			response.send(data);
			fs.close(fd);

			console.log(error);
		    });
		});
	    });
	});
    });
});*/

var data = fs.readFileSync(filename,"utf-8");
app.get('/', function(request, response) {
    response.send(data);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
