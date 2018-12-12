import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import CommentList from './CommentList';
import './article.css';
import { deleteArticle } from '../AC/articles';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
        }).isRequired,

        isOpen: PropTypes.bool,

        toggleOpen: PropTypes.func,
    };

    render() {
        const { article, isOpen, toggleOpen } = this.props;
        console.log('update article!');

        return (
            <div>
                <h3>
                    {article.title}
                    <button type="button" onClick={this.handleDelete}>
                        {' '}
                        delete article
                    </button>
                </h3>
                <button type="button" onClick={toggleOpen}>
                    {isOpen ? 'close article' : 'open article'}
                </button>
                <CSSTransitionGroup
                  transitionName="article"
                  transitionAppear
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                  component="div"
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        );
    }

    getBody() {
        const { article, isOpen } = this.props;
        const { comments } = article;

        if (isOpen) {
            return (
                <section>
                    <p>{article.text}</p>
                    <CommentList comments={comments} />
                </section>
            );
        }
        return null;
    }

    handleDelete = () => {
        console.log('deleting ', this.props.article.id);
        deleteArticle(this.props.article.id);
    };
}

export default Article;
