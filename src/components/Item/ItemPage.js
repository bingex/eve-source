import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import SimilarItems from './SimilarItems';
import ItemInfo from './ItemInfo';

const Col4 = styled.div`
    padding: 0 2px 0 0;

    @media(max-width: 768px) {
        margin: 0;
        padding: 0 2px 1px 0;
    }
`;

const Col8 = styled.div`
    padding: 0 2px 0 1px;

    @media(max-width: 768px) {
        margin: 0;
        padding: 0 2px 0 0;
    }
`;

const Wrapper = styled.div`
    padding: 0;
`;

class ItemPage extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Wrapper className="grid">
                    <Col4 className="col-4-12"><SimilarItems /></Col4>
                    <Col8 className="col-8-12"><ItemInfo /></Col8>
                </Wrapper>
            </div>
        );
    }
}

export default ItemPage;
