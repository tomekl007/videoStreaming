var express = require('express'),http = require('http');
var app = express();
app.use(express.static(__dirname))
var server = http.createServer(app);
var path = require('path');
server.listen(8080);


var io = require("socket.io").listen(server);
io.set('log level', 1);
var i = 0;
io.sockets.on('connection',function(socket){
	socket.on('newFrame',function(img){
    console.log("emit newFrame : " + i);
      i++;
		socket.broadcast.emit('setFrame',img);
	});

});