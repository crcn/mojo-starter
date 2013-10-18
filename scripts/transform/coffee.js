var coffee = require("coffee-script");

module.exports = {

  extension: "coffee",
  
  transform: function (content) {
    return coffee.compile(content, {
      bare: true
    });
  }
};