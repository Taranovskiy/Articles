import React, { Component } from 'react';
import './style.css';

const limits = {
    username: {
        min: 5,
        max: 15,
    },
    textOfNewComment: {
        min: 30,
        max: 50,
    },
};

export class CommentForm extends Component {
    state = {
        username: '',
        textOfNewComment: '',
    };

    render() {
        console.log(this.state.username);

        return (
            <form type="sumbit" onSubmit={this.handleSubmit}>
                <h4>Add new comment</h4>
                <div>
                    <label>
                        Username:
                        <input
                          type="text"
                          value={this.state.username}
                          onChange={this.handleChange('username')}
                          className={this.getClassName('username')}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Comment:
                        <textarea
                          cols="30"
                          rows="10"
                          value={this.state.textOfNewComment}
                          onChange={this.handleChange('textOfNewComment')}
                          className={this.getClassName('textOfNewComment')}
                        />
                    </label>
                </div>
                <button type="submit" value="submit">
                    Submit
                </button>
            </form>
        );
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({
            username: '',
            textOfNewComment: '',
        });
    };

    handleChange = type => (evt) => {
        const { value } = evt.target;
        if (value.length > limits[type].max) {
            return;
        }
        this.setState({
            [type]: value,
        });
    };

    getClassName = (type) => {
        if (this.state[type].length && this.state[type].length < limits[type].min) {
            return 'form-error';
        }
        return '';
    };
}

export default CommentForm;
