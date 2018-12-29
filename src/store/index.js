import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import idGenerator from '../middlewares/IdGenerator';

const enhancer = applyMiddleware(idGenerator, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
