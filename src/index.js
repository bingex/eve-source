import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import routes from './routes';

import App from './components/App';

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
