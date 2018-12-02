import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    state = {
        isOpen: false
    }

    static defaultProps = {
        comments: []
    }

    render() {
        return(
            <div>
                <button onClick = {this.toggleCommentsDisplay}>
                    {this.getCommentsButtonLabel()}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        const {isOpen} = this.state;
        const {comments} = this.props;
        
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
        const {comments} = this.props;
        const {isOpen} = this.state;

        if (!comments.length) {
            return 'no comments yet';
        }

        const label = isOpen ? 'hide comments' : 'show comments';
        return label;
    }

    toggleCommentsDisplay = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}