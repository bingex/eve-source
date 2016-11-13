import React from 'react';

import Search from './Search';
import SimilarItems from './SimilarItems';
import ItemInfo from './ItemInfo';

class ItemPage extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <div className="row">
                    <div className="col-md-4"><SimilarItems /></div>
                    <div className="col-md-8"><ItemInfo /></div>
                </div>
            </div>
        );
    }
}

export default ItemPage;
