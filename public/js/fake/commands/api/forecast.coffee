fixtures = {
  user1: [
    { _id: "mon", day: "Monday", type: "Sunny"        },
    { _id: "tue", day: "Tuesday", type: "Tuesday"     },
    { _id: "wed", day: "Wednesday", type: "Wednesday" },
    { _id: "thu", day: "Thursday", type: "Thursday"   }
  ]
}


module.exports = 
  "loadForecast": (message, next) ->  
    setTimeout (() -> 
      next null, fixtures[message.data.user.get("_id")]
    ), 500
