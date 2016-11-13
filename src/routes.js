import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ItemPage from './components/Item/ItemPage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ItemPage} />
    </Route>
);
