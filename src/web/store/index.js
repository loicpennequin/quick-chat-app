import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

export default function initStore(
    preloadedState,
    debug = process.env.NODE_ENV !== 'production'
) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
        predicate: (getState, action) => !action._muted,
        titleFormatter: (action, time, took) => `${action.type} @ ${time}`
    });

    const composeEnhancer =
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : compose;

    const middlewares = debug ? [thunk, logger] : [thunk];

    return createStore(
        reducer,
        preloadedState,
        composeEnhancer(applyMiddleware(...middlewares))
    );
}
