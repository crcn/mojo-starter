require("./plugins");

var MainView = require("./views/main");

var view = new MainView();
view.attach($("#application"));