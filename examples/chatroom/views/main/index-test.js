require("paperclip");
var MainView = require("./index"),
expect = require("expect.js"),
sinon = require("sinon");

describe(__filename + "#", function () {

  var view;

  beforeEach(function () {
    view = new MainView(void 0, chatroomApp);
    document.body.appendChild(view.render());
  });
  
  describe("controller#", function () {
    it("can create a message if the text is set", function () {

      var messages = view.messages = chatroomApp.models.create("messages");

      var createStub = sinon.stub(messages, "create");

      view.newMessage = "A";
      view.createMessage();

      expect(createStub.callCount).to.be(1);
      expect(createStub.firstCall.args[0].text).to.be("A");
      expect(createStub.firstCall.args[0].displayName).to.be("Anon");
    });

    it("cannot create a message if the text is blank", function () {

      var messages = view.messages = chatroomApp.models.create("messages");

      var createStub = sinon.stub(messages, "create");

      view.newMessage = void 0;
      view.createMessage();

      expect(createStub.callCount).to.be(0);
    });
  });

  describe("page#", function () {
    it("can display a list of messages", function () {

      view.set("messages", [
        { displayName: "A", text: "B" },
        { displayName: "C", text: "D" },
        { displayName: "E", text: "F" }
      ]);

      expect($(document.body).text()).to.contain("A: B  C: D  E: F");
    });
  });
});