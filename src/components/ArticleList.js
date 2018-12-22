import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array,
        filters: PropTypes.shape({
            selelection: PropTypes.array,
            range: PropTypes.shape({
                from: PropTypes.instanceOf(Date),
                to: PropTypes.instanceOf(Date),
            }),
        }),
        // from accordion
        toggleOpenItem: PropTypes.func,
        openItemId: PropTypes.string,
    };

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

export default connect(({ articles, filters }) => {
    const filtredArticles = articles.filter((article) => {
        const {
            selected,
            range: { from, to },
        } = filters;
        const moment = extendMoment(Moment);
        const range = moment.range(from, to);
        const articleDate = moment(article.date);
        const values = selected.map(item => item.value);
        return (
            (!selected.length || values.includes(article.id))
            && (!to || !from || range.contains(articleDate))
        );
        // return range.contains(articleDate));
    });
    return {
        articles: filtredArticles,
    };
})(accordion(ArticleList));
