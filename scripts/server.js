var express = require("express"),
browserify  = require("browserify-middleware"),
transform   = require("./transform");

var server = express(), port = 8081;
server.use(express.static(__dirname + "/../public"));

server.get("/js/index.bundle.js", browserify(__dirname + "/../public/js/index.js", { transform: transform, extensions: transform.extensions }));

server.listen(port);

console.log("HTTP server listening on port %d", port);