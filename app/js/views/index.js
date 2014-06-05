/**
 * View controllers. Proxy between templates (views), and all other parts of the applcation.
 */

module.exports = function (app) {
  app.views.register({
    main: require("./main")
  });
};
