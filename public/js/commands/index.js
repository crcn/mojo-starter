var funwrap = require("funwrap");

var commands = [
  require("./initialize"),
  require("./load"),
  require("./bootstrap")
];

module.exports = function (mojo) {

  var mediator = mojo.mediator = funwrap().mediator;

  for(var i = commands.length; i--;) {
    commands[i](mediator);
  }

}