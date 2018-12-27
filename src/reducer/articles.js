import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE } from '../constants';

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

        default:
            return Object.values(articlesState);
    }
};
