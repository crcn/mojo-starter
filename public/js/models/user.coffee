model = require "bindable-model"
Forecast = require "./forecast"

class User extends model.Model

  ###
  ###

  constructor: (options) ->
    @application = options.application
    super options


  ###
  ###

  virtuals:
    "forecast": (next) -> @application.createModel("forecasts", { user: @ }).load next



module.exports = User