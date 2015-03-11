let Rx = require("rx");

module.exports = (actions, initialCount) => {

    let increment = actions.Counter.increment.map(() => (currentCount) => currentCount + 1);
    let decrement = actions.Counter.decrement.map(() => (currentCount) => currentCount - 1);

    let count = Rx.Observable
        .merge(increment, decrement)
        .scan(initialCount, (currentCount, mod) => mod(currentCount))
        .publishValue(initialCount);

    count.connect();

    return count;
};