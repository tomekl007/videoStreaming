var express = require('express'),http = require('http');
var app = express();
app.use(express.static(__dirname))
var server = http.createServer(app);
var path = require('path');
server.listen(8080);

var io = require("socket.io").listen(server);
io.sockets.on('connection',function(socket){
	socket.on('newFrame',function(img){
		console.log("--->on newFrame")
		io.sockets.emit('setFrame',img);
	});
});