module.exports =  
  "login": (message, next) ->

    # simulate latency
    setTimeout (() -> 

      unless message.data.username is "user" and message.data.password is "pass"
        return next new Error "Incorrect user / password!"

      next null, user = (app = message.mediator.application).createModel "user", {
        username: message.data.username,
        name: "John Doe",
        _id: "user1"
      }

      # since there is only one user per app, set as a global item
      app.models.set "user", user
    ), 500