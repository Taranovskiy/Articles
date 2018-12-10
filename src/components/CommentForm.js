import React, { Component } from 'react';

export class CommentForm extends Component {
    state = {
        username: '',
        textOfNewComment: '',
        usernameError: false,
        textOfNewCommentEror: false,
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
                          style={this.setUsernameErrorMark()}
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
                          style={this.setTextOfCommentErrorMark()}
                        />
                    </label>
                </div>
            </div>
        );
    }

    handleUsernameChange = (evt) => {
        const username = evt.target.value;
        this.setState(
            username.length < 5 || username.length > 12
                ? { usernameError: true }
                : { usernameError: false },
        );
        this.setState({
            username,
        });
    };

    handleTextOfCommentChange = (evt) => {
        const textOfNewComment = evt.target.value;
        this.setState(
            textOfNewComment.length < 20 || textOfNewComment.length > 50
                ? { textOfNewCommentEror: true }
                : { textOfNewCommentEror: false },
        );
        this.setState({
            textOfNewComment,
        });
    };

    setUsernameErrorMark() {
        return this.state.usernameError ? { borderColor: 'red' } : { borderColor: 'green' };
    }

    setTextOfCommentErrorMark() {
        return this.state.textOfNewCommentEror ? { borderColor: 'red' } : { borderColor: 'green' };
    }
}

export default CommentForm;
