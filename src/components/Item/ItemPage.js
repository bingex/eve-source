import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import SimilarItems from './SimilarItems';
import ItemInfo from './ItemInfo';

const Col4 = styled.div`
    margin-left: 0 !important;
    margin-top: 2px !important;
`;

class ItemPage extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <div className="row">
                    <Col4 className="col-4"><SimilarItems /></Col4>
                    <div className="col-8">
                        <ItemInfo />
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemPage;
