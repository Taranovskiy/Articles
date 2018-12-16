import { articles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE, SELECT_ARTICLE } from '../constants';

export default (articleState = defaultArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
        case SELECT_ARTICLE:
            return defaultArticles.filter((article) => {
                const { selection } = payload;
                if (!selection.length) {
                    return true;
                }
                const values = selection.map(item => item.value);
                return values.includes(article.id);
            });
        default:
            return articleState;
    }
};
