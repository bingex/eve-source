import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import routes from './routes';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Router history={hashHistory}  routes={routes} />
    </Provider>,
    document.getElementById('root')
);
