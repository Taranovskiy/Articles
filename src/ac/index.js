import {
    DELETE_ARTICLE, SELECT_ARTICLE, DATE_RANGE, INCREMENT,
} from '../constants';

export const increment = () => ({ type: INCREMENT });

export const deleteArticle = id => ({
    type: DELETE_ARTICLE,
    payload: { id },
});

export const selectArticle = (selection = [], articles) => ({
    type: SELECT_ARTICLE,
    payload: { selection, articles },
});

export const dateRange = range => ({
    type: DATE_RANGE,
    payload: {
        from: range.from,
        to: range.to,
    },
});
