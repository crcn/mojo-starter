mojo = require "mojojs"

# initialize the application
app = new mojo.Application()

# register all the parts of the application
app.
  use(require("./models")).
  use(require("./views")).
  use(require("./fake/commands"))

# initialize

app.mediator.execute "bootstrap", () ->

  app.
    createView("main").
    attach($("#application"))