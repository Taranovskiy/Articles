import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    render() {
        console.log(this.props);
        const {toggleOpen} = this.props;

        return(
            <div>
                <button onClick = {toggleOpen}>
                    {this.getCommentsButtonLabel()}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        const {comments, isOpen} = this.props;
        
        if (!isOpen || !comments.length) {
            return null;
        }

        const commentElements = comments.map((comment) => {
            return ( 
                <li key = {comment.id}>
                    <Comment comment = {comment} />
                </li>
            );
        });
    
        return(
            <ul>
                {commentElements}
            </ul>
        );

    }

    getCommentsButtonLabel() {
        const {comments, isOpen} = this.props;

        if (!comments.length) {
            return 'no comments yet';
        }

        const label = isOpen ? 'hide comments' : 'show comments';
        return label;
    }
}

export default toggleOpen(CommentList);