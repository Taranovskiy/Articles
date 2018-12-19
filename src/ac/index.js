import {
    DELETE_ARTICLE, SELECT_BY_TITLE, SELECT_BY_DATE_RANGE, INCREMENT,
} from '../constants';

export const increment = () => ({ type: INCREMENT });

export const deleteArticle = id => ({
    type: DELETE_ARTICLE,
    payload: { id },
});

export const selectArticleByTitle = (selection = [], articles) => ({
    type: SELECT_BY_TITLE,
    payload: { selection, articles },
});

export const selectArticleByDateRange = range => ({
    type: SELECT_BY_DATE_RANGE,
    payload: {
        from: range.from,
        to: range.to,
    },
});
