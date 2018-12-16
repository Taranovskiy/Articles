import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array,
        // from accordion
        toggleOpenItem: PropTypes.func,
        openItemId: PropTypes.string,
    };

    render() {
        const { toggleOpenItem, openItemId } = this.props;

        const articleElements = this.props.articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ));

        return <ul>{articleElements}</ul>;
    }
}

export default connect(({ articles }) => ({
    articles,
}))(accordion(ArticleList));
