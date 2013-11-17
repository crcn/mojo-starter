outcome = require "outcome"

module.exports = 
  "load"       : (msg, next) -> next()
  "initialize" : (msg, next) -> next()
  "bootstrap"  : (msg, next) ->
    o = outcome.e next
    msg.mediator.execute "load", o.s () ->
      msg.mediator.execute "initialize", o.s () ->
        next()
