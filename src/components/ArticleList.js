import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';

class ArticleList extends Component {

    render() {
        const {toggleOpenArticle, openArticleId} = this.props;

        const articleElements = this.props.articles.map((article) => {
            return (
                <li key = {article.id}>
                    <Article
                        article = {article} 
                        isOpen = {article.id === openArticleId}
                        toggleOpen = {toggleOpenArticle(article.id)}
                    />
                </li>
            );
        });
    
        return(
            <ul>
                {articleElements}
            </ul>
        );
    }
}

export default accordion(ArticleList);