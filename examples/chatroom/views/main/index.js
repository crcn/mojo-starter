var views = require("mojo-views"),
MessageView = require("./message");



module.exports = views.Base.extend({

  /**
   */

  displayName: "Anon",

  /**
   * index template
   */

  paper: require("./index.pc"),

  /**
   * displays a list of messages
   */

  children: {
    messages: {
      type: "list",
      source: "messages",
      modelViewClass: MessageView,
      sort: function (a, b) {
        return a.createdAt > b.createdAt ? 1 : -1;
      }
    }
  },

  /**
   * creates a new message
   */

  createMessage: function () {

    // ignore any blank messages
    if (!this.newMessage) return;

    // create a new message with the display name
    // of the user, along with a timestamp
    this.get("messages").create({
      text: this.newMessage,
      displayName: this.displayName,
      createdAt: Date.now()
    });

    // reset the form input
    this.set("newMessage", void 0);
  }
});