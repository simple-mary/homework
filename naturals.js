/**
 * Created by User on 09.05.2017.
 */

var http = require("http");
var fs = require("fs");
var events = require('events');
var content3 = "";

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('naturals', function(number)
{

    for (var i = 0; i < number; i++)
    {
        content3 += "<tr>" + "<td style='border: 1px inset #6a5acd;'>" + i + "</td>"+"</tr>";
    }

    http.createServer(
        function (req, resp) {
            resp.writeHead(200, {'Content-type': 'text/html; charset="utf-8"'});

            resp.write("<div style=' width: 600px; margin: 20px auto;'>" +
                "<table style='width: 100%; text-align: center; border: 3px inset #87ceeb;'>" +
                "<tr><td style='border: 2px inset #6a5acd;'>" +
                "Натуральные числа</td>+</tr>" + content3 + "</table></div>");
            resp.end("\nServer work.(localhost:10000)", "utf-8");
        }
    ).listen(10000);
    console.log("Server Ok.");
});

server.emit('naturals', 23);



