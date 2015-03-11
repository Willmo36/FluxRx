let React = require("react");
let Context = require("./Context");
let CounterActionCreators = require("./actions/CounterActionCreators");
let CounterStore = require("./stores/CounterStore");
let Counter = require("./components/Counter.react");

let actions = {
    Counter: CounterActionCreators()
};
let stores = {
    Counter: CounterStore(actions, 123)
};

let context = new Context(actions, stores);

React.withContext(context, () => {
    React.render(<Counter />, document.getElementById("counter"));
});