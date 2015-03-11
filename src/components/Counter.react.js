let React = require("react");

let Counter = React.createClass({

    contextTypes: {
        actions: React.PropTypes.object,
        stores: React.PropTypes.object
    },

    getInitialState() {
        let initialCount = 0;

        this._getStateFromStores(count => {
            initialCount = count;
        });

        return {count:initialCount};
    },

    componentDidMount(){
      this._getStateFromStores(count => this.setState({count}));
    },

    _getStateFromStores(cb) {
        return this.context.stores.Counter.subscribe(cb);
    },

    _decrement(){
      this.context.actions.Counter.decrement.onNext();
    },

    _increment(){
      this.context.actions.Counter.increment.onNext();
    },

    render() {
        return (
            <div>
                <span onClick={this._decrement}> - </span>
                <span>{this.state.count}</span>
                <span onClick={this._increment}> + </span>
            </div>
        )
    }
});

module.exports = Counter;