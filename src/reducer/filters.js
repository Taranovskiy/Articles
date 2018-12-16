import { articles as defaultArticles } from '../fixtures';
import { SELECT_ARTICLE } from '../constants';

export default (articleState = defaultArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_ARTICLE:
            return articleState.filter((article) => {
                const { selection } = payload;
                const ids = selection.map(item => item.value);
                console.log(window.store.getState());

                return ids.includes(article.id);
            });
        default:
            return articleState;
    }
};
