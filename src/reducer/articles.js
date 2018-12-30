import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants';
import { arrToMap } from '../helpers';

const articlesMap = arrToMap(defaultArticles);

export default (articlesState = articlesMap, action) => {
    const { type, payload, id } = action;

    switch (type) {
        case DELETE_ARTICLE: {
            const newState = { ...articlesState };
            delete newState[payload.id];
            return newState;
        }
        case ADD_COMMENT: {
            const targetArticle = articlesState[payload.articleId];

            return {
                ...articlesState,
                [payload.articleId]: {
                    ...targetArticle,
                    comments: (targetArticle.comments || []).concat(id),
                },
            };
        }
        default:
            return articlesState;
    }
};
