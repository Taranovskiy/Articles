import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../AC';
import './style.css';

const limits = {
    username: {
        min: 5,
        max: 15,
    },
    textOfComment: {
        min: 30,
        max: 50,
    },
};

export class CommentForm extends Component {
    static propTypes = {
        // from connect
        addComment: PropTypes.func,
    };

    state = {
        username: '',
        textOfComment: '',
    };

    render() {
        console.log(this.state.username);

        return (
            <form type = "sumbit" onSubmit = {this.handleSubmit}>
                <h4>Add new comment</h4>
                <div>
                    <label>
                        Username:
                        <input
                            type = "text"
                            value = {this.state.username}
                            onChange = {this.handleChange('username')}
                            className = {this.getClassName('username')}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Comment:
                        <textarea
                            cols = "30"
                            rows = "10"
                            value = {this.state.textOfNewComment}
                            onChange = {this.handleChange('textOfComment')}
                            className = {this.getClassName('textOfComment')}
                        />
                    </label>
                </div>
                <button type = "submit" value = "submit">
                    Submit
                </button>
            </form>
        );
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { addComment } = this.props;
        const { username, textOfComment } = this.state;
        addComment(username, textOfComment);
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

export default connect(
    null,
    { addComment },
)(CommentForm);
