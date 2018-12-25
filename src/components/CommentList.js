import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool,
    };

    static defaultProps = {
        comments: [],
    };

    render() {
        const { toggleOpen } = this.props;

        return (
            <div>
                <button type = "button" onClick = {toggleOpen}>
                    {this.getCommentsButtonLabel()}
                </button>
                {this.getBody()}
                <CommentForm />
            </div>
        );
    }

    getBody() {
        const { comments, isOpen } = this.props;

        if (!isOpen || !comments.length) {
            return null;
        }

        const commentElements = comments.map(id => (
            <li key = {id}>
                <Comment id = {id} />
            </li>
        ));

        return <ul>{commentElements}</ul>;
    }

    getCommentsButtonLabel() {
        const { comments, isOpen } = this.props;

        if (!comments.length) {
            return 'no comments yet';
        }

        const label = isOpen ? 'hide comments' : 'show comments';
        return label;
    }
}

export default toggleOpen(CommentList);
