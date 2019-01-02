import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './Article';
import accordion from '../decorators/accordion';
import { filtratedArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array.isRequired,
        filters: PropTypes.shape({
            selelection: PropTypes.array,
            range: PropTypes.shape({
                from: PropTypes.instanceOf(Date),
                to: PropTypes.instanceOf(Date),
            }),
        }),
        loadAllArticles: PropTypes.func,
        // from accordion
        toggleOpenItem: PropTypes.func.isRequired,
        openItemId: PropTypes.string,
    };

    componentDidMount() {
        this.props.loadAllArticles();
    }

    render() {
        const { articles, toggleOpenItem, openItemId } = this.props;
        const articleElements = articles.map(article => (
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

export default connect(
    state => ({
        articles: filtratedArticlesSelector(state),
    }),
    { loadAllArticles },
)(accordion(ArticleList));
