mediocre = require "mediocre"

commands = [
  require("./bootstrap")
]

module.exports = (mojo) ->

  mojo.mediator = mediocre()