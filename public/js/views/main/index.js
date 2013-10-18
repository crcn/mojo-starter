var mojo = require("mojojs");

module.exports = mojo.View.extend({

  name: "Mojo",

  //paperclip template
  paper: require("./index.pc")
});