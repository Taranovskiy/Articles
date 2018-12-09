import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';

export default class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

    render() {

        return (
            <div>
                <UserForm articles={this.props.articles} />
                <ArticleList articles={this.props.articles} />
            </div>
        );
    }
}