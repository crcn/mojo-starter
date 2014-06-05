var Application = require("mojo-application");

module.exports = Application.extend({
  registerPlugins: function () {
    this.use(require("mojo-views"))
    this.use(require("mojo-paperclip"));
    this.use(require("./views"));
  },
  didInitialize: function (options) {
    $(options.element).append(this.views.create("main").render());
  }
})
