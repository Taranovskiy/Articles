import { Map, Record } from 'immutable';
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants';
import { arrToMap } from '../helpers';

const ArticleRecord = Record({
    title: '',
    text: '',
    id: null,
    comments: [],
});

const defaultState = new Map({});

export default (articlesState = defaultState, action) => {
    const {
        type, payload, response, id,
    } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id);

        case LOAD_ALL_ARTICLES:
            return arrToMap(response, ArticleRecord);

        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId, 'comments'], comments => comments.concat(id));

        default:
            return articlesState;
    }
};
