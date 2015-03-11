let Rx = require("rx");

module.exports = () => {
    return {
        increment: new Rx.Subject(),
        decrement: new Rx.Subject()
    }
};