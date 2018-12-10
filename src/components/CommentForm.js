import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CommentForm extends Component {
    static propTypes = {};

    state = {
        username: '',
        newCommentText: '',
    };

    render() {
        return (
            <div>
                <h4>add new comment</h4>
                <label>
                    username
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleUserChange}
                    />
                </label>
            </div>
        );
    }
}

export default CommentForm;
