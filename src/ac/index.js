import { DELETE_ARTICLE, SELECT_ARTICLE, INCREMENT } from '../constants';

export const increment = () => ({ type: INCREMENT });

export const deleteArticle = id => ({
    type: DELETE_ARTICLE,
    payload: { id },
});

export const selectArticle = (selection = [], articles) => ({
    type: SELECT_ARTICLE,
    payload: { selection, articles },
});
