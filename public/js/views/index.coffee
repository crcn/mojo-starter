module.exports = (app) ->
    
  # the main view class. Replace this with whatever component you're building
  # place any independent components in views/**
  mainViewClass = require("./main")

  # all independent views from the root. This is useful when sprinkling
  # mojo views throughout an existing backbone / ember / angular application.
  app.registerViewClass "main", mainViewClass