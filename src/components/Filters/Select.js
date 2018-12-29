import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { selectArticleByTitle } from '../../AC';

class Filters extends Component {
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
        selected: PropTypes.array,
        selectArticleByTitle: PropTypes.func,
    };

    render() {
        const { articles, selected } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id,
        }));

        return (
            <Select options = {options} value = {selected} onChange = {this.changeSelection} isMulti />
        );
    }

    changeSelection = (selected) => {
        const { selectArticleByTitle } = this.props;

        selectArticleByTitle(selected);
    };
}

export default connect(
    state => ({
        articles: Object.values(state.articles),
        selected: state.filters.selected,
    }),
    { selectArticleByTitle },
)(Filters);
