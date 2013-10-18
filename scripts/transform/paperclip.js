var paperclip = require("paperclip"),
fs            = require("fs");

module.exports = {

  extension: "pc",
  
  transform: function (content) {
    return paperclip.translator.parse(content);
  }
};