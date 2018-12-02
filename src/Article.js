import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }
    
    state = {
        isOpen: false,
        isCommentsOpen: false
    }



    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return(
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleArticleDisplay}>
                    {isOpen ? 'close article' : 'open article'}
                </button>
                {this.getBody()}
            </div>
        )
    }
    
    getBody() {
        const {article} = this.props;
        const comments = article.comments;
        const {isOpen} = this.state;

        if (isOpen) {
            return(
                <section>
                    <p>{article.text}</p>
                    <CommentList comments = {comments}/>
                </section>
            )
        }
        return null;
    }

    toggleArticleDisplay = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}