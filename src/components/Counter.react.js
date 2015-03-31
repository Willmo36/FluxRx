let React = require("react");

let Counter = React.createClass({

    contextTypes: {
        actions: React.PropTypes.object,
        stores: React.PropTypes.object
    },

    getInitialState() {
        return {count:0}
    },

    componentWillMount(){
      this.unsubscribeFromCounter = this.content.stores.Counter.subscribe(count => {
         this.setState({count: count}) ;
      });
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
