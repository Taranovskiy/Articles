import React, { Component } from 'react';
import { articleStore } from '../stores';
import ArticleList from './ArticleList';

export class Container extends Component {
    state = {
        articles: articleStore.getAll(),
    };

    componentDidMount() {
        articleStore.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll(),
        });
    };

    render() {
        return <ArticleList articles={this.state.articles} />;
    }
}

export default Container;
