let Rx = require("rx");

module.exports = function(){
  return {
      create: new Rx.Subject(),
      remove: new Rx.Subject()
  }
};