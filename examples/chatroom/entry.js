var Application = require("mojo-application");

var ChatroomApplication = require("./index");
var app = new ChatroomApplication();

app.bootstrap({
  element: document.body
});
