var http = require('http');
var express = require('express');
var app = express();

// For http
var httpServer = http.createServer(app);
httpServer.listen(8080);
console.log("server listening on port 8080")

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});
