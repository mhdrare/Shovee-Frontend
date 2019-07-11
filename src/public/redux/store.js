import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';


import rootReducer from './reducer';

const logger = createLogger({});

const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        promiseMiddleware
    )
);

export default store;