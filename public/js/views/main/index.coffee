mojo = require "mojojs"
bindableCall = require "bindable-call"

class MainView extends mojo.View

  username: "user"
  password: "pass"

  ###
  ###

  define: ["loginRequest", "user"]

  ###
  ###

  bindings:
    "loginRequest.result": "user"


  ###
  ###

  paper: require "./index.pc"

  ###
  ###

  login: () ->

    # bindableCall is a useful utility that maps out
    # err, and success responses
    @set "loginRequest", bindableCall (next) =>
      @application.mediator.execute "login", {
        username: @username,
        password: @password
      }, next


  ###
  ###

  sections:
    forecast:
      type: "list"
      source: "user.forecast"
      modelViewClass: require("./forecast")




module.exports = MainView