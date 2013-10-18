var modifiers = {

  /** 
   * i18n translation
   */

  t: function (string, options) {

    //i18next, or similar.
    i18n.t(string, options);
  },


  /**
   * i18n pluralization
   */

  tPlural: function (string, count, options) {

    if(!options) options = {};

    var ops = {
      0       : "none",
      1       : "one",
      default : "many"
    }

    //translate
    return modifiers.t([string, ops[count] || ops.default].join("."), options);
  }
};

/**
 */

module.exports = function (pc) {
  for(var name in modifiers) {
    pc.modifier(name, modifiers[name]);
  }
};