import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants';

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            console.log('--->>', 'articleState', articlesState);
            return articlesState.filter(article => article.id !== payload.id);
        case ADD_COMMENT:
            console.log('--->>', 'payload', payload);
            console.log('--->>', 'articlesState', articlesState);
            console.log(
                '--->>',
                'find article',
                articlesState.findIndex(article => article.id === payload.articleId),
            );
            const indexOfCurrentArticle = articlesState.findIndex(
                article => article.id === payload.articleId,
            );

            articlesState[indexOfCurrentArticle].comments.push(payload.id);
            return articlesState;
        default:
            return Object.values(articlesState);
    }
};
