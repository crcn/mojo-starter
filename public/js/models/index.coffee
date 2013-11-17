modelClasses = {
  "user": require("./user"),
  "forecast": require("./forecast"),
  "forecasts": require("./forecasts")
}

module.exports = (app) -> 
  for name of modelClasses
    app.registerModelClass name, clazz = modelClasses[name]

  