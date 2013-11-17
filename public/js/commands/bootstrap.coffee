module.exports = 
  "load"       : (msg, next) -> next()
  "initialize" : (msg, next) -> next()
  "bootstrap"  : ["load", "initialize"]
