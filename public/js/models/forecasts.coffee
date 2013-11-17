model = require "bindable-model"
outcome = require "outcome"


class Forecasts extends model.Collection
  
  createModel: (data) => @application.createModel "forecast", data

  constructor: (options) ->
    @application = options.application
    @user = options.user
    super()

  _load: (next) =>
    @application.mediator.execute "loadForecast", {
      user: @user
    }, outcome.e(next).s (data) =>
      @reset data
      next()

module.exports = Forecasts