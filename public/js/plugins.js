//script that registers all commands & plugins
var paperclip = require("paperclip"),
mojo          = require("mojojs");


/**
 * template plugins
 */

paperclip.use(require("./paperclip/modifiers"));
paperclip.use(require("./paperclip/bindings"));

/**
 * mojo plugins
 */


mojo.use(require("./commands"));