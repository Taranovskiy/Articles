import { combineReducers } from 'redux';
import counterReducer from './counter';
import articles from './articles';
import selectArticle from './selectArticle';

export default combineReducers({
    count: counterReducer,
    articles,
    selectArticle,
});
