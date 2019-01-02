import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import idGenerator from '../middlewares/IdGenerator';
import api from '../middlewares/api';

const enhancer = applyMiddleware(idGenerator, api, logger);

const store = createStore(reducer, {}, enhancer);

// dev only
window.store = store;

export default store;
