//script that registers all commands & plugins
var paperclip = require("paperclip"),
mojo          = require("mojojs");

/**
 * template plugins
 */

paperclip.use(require("./paper/modifiers")); // template modifiers
paperclip.use(require("./paper/bindings"));  // custom DOM bindings

/**
 * mojo plugins
 */

mojo.use(require("./commands")); // register global commands
mojo.use(require("./models"));   // attach to the models singleton