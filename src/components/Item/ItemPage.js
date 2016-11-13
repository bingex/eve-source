import React from 'react';

import SearchInput from './SearchInput';
import SimilarItems from './SimilarItems';
import ItemInfo from './ItemInfo';

class ItemPage extends React.Component {
    render() {
        return (
            <div>
                <SearchInput />
                <div className="row">
                    <div className="col-md-4"><SimilarItems /></div>
                    <div className="col-md-8"><ItemInfo /></div>
                </div>
            </div>
        );
    }
}

export default ItemPage;
