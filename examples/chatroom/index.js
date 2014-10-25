var Application = require("mojo-application");

module.exports = Application.extend({
  config: {
    pubnub: {
      subscribe_key: "sub-c-9535ac96-4823-11e4-aaa5-02ee2ddab7fe",
      publish_key: "pub-c-55ed0f2b-6b2e-455a-977e-9530bb287d2f"
    }
  },
  plugins: [
    require("mojo-bootstrap"),
    require("mojo-views"),
    require("mojo-paperclip"),
    require("mojo-models"),
    require("./views"),
    require("./models")
  ],
  willInitialize: function () {
    if (process.browser) {
      this.use(require("mojo-event-bus"), require("mojo-pubnub"));
    }
  },
  didBootstrap: function (options) {
    // initialize pubnub here - important incase we wanna pass in a user ID
    // later on

    if (this.eventBus) {
      this.eventBus.publish("/initializePubnub", {
        channel: "chatroom"
      });
    }

    // create the main view, and add the todos models
    options.element.appendChild(this.views.create("main", {
      messages: this.models.create("messages")
    }).render());
  }
});