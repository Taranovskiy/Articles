import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
import Filters from './Filters';

export default class App extends Component {
    static propTypes = {
        articles: PropTypes.array,
    };

    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticleList />
            </div>
        );
    }
}
