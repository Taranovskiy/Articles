import React, { Component } from 'react';

export default class UserForm extends Component {
    state = {
        username: '',
    };

    render() {
        return (
            <label>
                Name:
                <input type = "text" value = {this.state.username} onChange = {this.handleUserChange} />
            </label>
        );
    }

    handleUserChange = (evt) => {
        const username = evt.target.value;
        if (username.length > 10) {
            return;
        }
        this.setState({
            username,
        });
    };
}
