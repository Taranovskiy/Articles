import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment } from "../ac";

export class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render() {
        console.log(this.props);

        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.props.increment();
    };
}

const mapStateToProps = state => {
    return {
        counter: state.count
    };
};

const mapToDispatch = { increment };

const decorator = connect(
    mapStateToProps,
    mapToDispatch
);

export default decorator(Counter);
