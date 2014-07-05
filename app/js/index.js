var Application = require("mojo-application");

module.exports = Application.extend({
  plugins: [

    require("mojo-mediator"),
    require("mojo-router"),
    require("mojo-models"),
    require("mojo-views"),
    require("mojo-paperclip"),

    require("./commands"),
    require("./routes"),
    require("./models"),
    require("./views"),
    require("./templates")
  ],
  didInitialize: function (options) {
    $(options.element).append(this.views.create("main").render());
  }
});
