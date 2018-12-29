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
            return Object.values(articlesState).filter(article => article.id !== payload.id);
        case ADD_COMMENT: {
            articlesState[payload.articleId].comments.push(payload.id);
            return articlesState;
        }
        default:
            return articlesState;
    }
};
