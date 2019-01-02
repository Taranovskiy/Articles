import {
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES,
    SELECT_BY_TITLE,
    SELECT_BY_DATE_RANGE,
    INCREMENT,
    ADD_COMMENT,
} from '../constants';

export const increment = () => ({ type: INCREMENT });

export const deleteArticle = id => ({
    type: DELETE_ARTICLE,
    payload: { id },
});

export const loadAllArticles = () => ({
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article',
});

export const selectArticleByTitle = (selected, articles) => ({
    type: SELECT_BY_TITLE,
    payload: { selected, articles },
});

export const selectArticleByDateRange = range => ({
    type: SELECT_BY_DATE_RANGE,
    payload: {
        from: range.from,
        to: range.to,
    },
});

export const addComment = (userName, textOfComment, articleId) => ({
    type: ADD_COMMENT,
    payload: {
        comment: { user: userName, text: textOfComment },
        articleId,
    },
    generateId: true,
});
