var express = require("express"),
browserify  = require("browserify-middleware"),
through     = require("through"),
paperclip   = require("paperclip"),
fs          = require("fs")

var server = express(), port = 8081;
server.use(express.static(__dirname + "/../public"));

server.get("/js/index.bundle.js", browserify(__dirname + "/../public/js/index.js", { transform: transformPaperclip }));


//TODO - move to new repo
function transformPaperclip(path) {
  var buffer = [];
  return through(write, end);

  function write(chunk) {
    buffer.push(chunk);
  }

  function end() {

    var content = buffer.join("");

    if(/\.pc$/.test(path)) {
      content = paperclip.translator.parse(fs.readFileSync(path, "utf8"));
    }

    this.queue(content);
    this.queue(null);
  }
}
server.listen(port);

console.log("HTTP server listening on port %d", port);