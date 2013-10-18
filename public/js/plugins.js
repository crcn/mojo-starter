//script that registers all commands & plugins
var paperclip = require("paperclip"),
mojo          = require("mojojs");


/**
 * template plugins
 */

paperclip.use(require("./paper/modifiers"));
paperclip.use(require("./paper/bindings"));

/**
 * mojo plugins
 */


mojo.use(require("./commands"));