var mojo = require("mojojs");

module.exports = mojo.View.extend({

  //paperclip template
  paper: require("./index.pc"),

  //sections for the main view
  sections: {
    main: {
      type: "states",
      index: 0,
      views: [
        { class: require("./app")  , name: "app" },
        { class: require("./auth") , name: "app" }
      ]
    }
  }

});