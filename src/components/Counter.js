import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../AC';

export class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired,
    };

    render() {
        console.log('Counter -->', this.props);

        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button type = "button" onClick = {this.handleIncrement}>
                    Increment me
                </button>
            </div>
        );
    }

    handleIncrement = () => {
        this.props.increment();
    };
}

const mapStateToProps = state => ({
    counter: state.count,
});

const mapDispatchToProps = { increment };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
