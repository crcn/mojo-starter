var Application = require("mojo-application");

module.exports = Application.extend({
  plugins: [

    require("mojo-mediator"),
    require("mojo-views"),
    require("mojo-paperclip"),

    require("./commands"),
    require("./models"),
    require("./views"),
    require("./templates"),
    require("./routes")
  ],
  didInitialize: function (options) {
    $(options.element).append(this.views.create("main").render());
  }
});
