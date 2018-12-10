import React, { Component } from 'react';

export class CommentForm extends Component {
    state = {
        username: '',
        textOfNewComment: '',
    };

    render() {
        return (
            <div>
                <h4>Add new comment</h4>
                <div>
                    <label>
                        Username:
                        <input
                          type="text"
                          value={this.state.username}
                          onChange={this.handleUsernameChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Comment:
                        <textarea
                          cols="30"
                          rows="10"
                          onChange={this.handleTextOfCommentChange}
                          value={this.state.textOfNewComment}
                        />
                    </label>
                </div>
            </div>
        );
    }

    handleUsernameChange = (evt) => {
        const username = evt.target.value;
        this.setState({
            username,
        });
    };

    handleTextOfCommentChange = (evt) => {
        const textOfNewComment = evt.target.value;
        this.setState({
            textOfNewComment,
        });
    }
}

export default CommentForm;
