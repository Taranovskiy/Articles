import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import CommentList from '../CommentList';
import { deleteArticle } from '../../AC';
import './style.css';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            date: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array,
        }).isRequired,

        isOpen: PropTypes.bool,

        toggleOpen: PropTypes.func,

        // from connect
        deleteArticle: PropTypes.func,
    };

    render() {
        const { article, isOpen, toggleOpen } = this.props;
        console.log('--->>', 'article', article);

        return (
            <div>
                <h3>{article.title}</h3>
                <button type = "button" onClick = {toggleOpen}>
                    {isOpen ? 'close article' : 'open article'}
                </button>
                <button type = "button" onClick = {this.handleDelete}>
                    delete me
                </button>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionAppear
                    transitionAppearTimeout = {500}
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    component = "div"
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        );
    }

    handleDelete = () => {
        const { deleteArticle, article } = this.props;
        deleteArticle(article.id);
    };

    getBody() {
        const { article, isOpen } = this.props;
        const { comments } = article;

        if (isOpen) {
            return (
                <section>
                    <p>{article.text}</p>
                    <CommentList comments = {comments} />
                </section>
            );
        }
        return null;
    }
}

export default connect(
    null,
    { deleteArticle },
)(Article);
