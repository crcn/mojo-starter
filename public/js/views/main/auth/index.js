var mojo = require("mojojs");

module.exports = mojo.View.extend({

  //paperclip template
  paper: require("./index.pc"),

  //sections for the main view
  sections: {
    auth: {
      type: "states",
      index: 0,
      views: [
        { class: require("./login")  , name: "login" },
        { class: require("./signup") , name: "signup" }
      ]
    }
  }

});