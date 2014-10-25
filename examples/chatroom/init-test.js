var jsdom = require("jsdom");

var ChatroomApplication = require("./index"),
nofactor = require("nofactor");

before(function (next) {
  jsdom.env("<html><head></head><body></body></html>", [ __dirname + "/../../app/vendor/zepto.js" ], function(err, window) {

    global.window = window;

    // set the document to global so that nofactor has access to it
    global.document = window.document;

    // make sure this is accessible in the application
    global.$ = window.$;

    next();
  });
});

beforeEach(function (next) {

  var app = global.chatroomApp = new ChatroomApplication({
    nodeFactory: nofactor.dom
  });

  document.body.innerHTML = "";

  app.bootstrap({
    element: document.body
  }, next);
});