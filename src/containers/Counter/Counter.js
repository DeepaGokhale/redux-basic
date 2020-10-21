import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCtr} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCtr}  />
                <CounterControl label="Add 5" clicked={this.props.onAddValue}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementValue}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cntr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCtr: () => dispatch({type: 'INCREMENT'}),
        onDecrementCtr: () => dispatch({type: 'DECREMENT'}),
        onAddValue: () => dispatch({type: 'ADD_VALUE'}),
        onDecrementValue: () => dispatch({type: 'DECREMENT_VALUE'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);