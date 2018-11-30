import React from 'react';
import Article from './Article';

export default ({articles}) => {
    const articleElement = articles.map((article) => {
        return <li key = {article.id}><Article article = {article} /></li>
    })
    return(
        <ul>
            {articleElement}
        </ul>
    )
}