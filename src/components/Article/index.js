import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import {CSSTransitionGroup} from 'react-transition-group';
import './style.css';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,

        isOpen: PropTypes.bool,

        toggleOpen: PropTypes.func
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log('update article!');

        return(
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close article' : 'open article'}
                </button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear = {true}
                    transitionAppearTimeout = {500}
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    component = 'div'
                    >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        const comments = article.comments;

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
}

export default Article;
