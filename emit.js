/**
 * Created by User on 09.05.2017.
 */
var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request) {
    request.approved = true;
    request.smth = "123";
    console.log(request);
});

server.on('request', function(request) {
    console.log(request);
    console.log("lalaakak");
});




server.emit('request', {from: "Client"});

server.emit('request', {from: "Another Client"});
