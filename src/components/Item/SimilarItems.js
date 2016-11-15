import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import { setActiveItem, getUsedInItems } from '../../actions/itemActions';
import classnames from 'classnames';
import { Headline, Wrapper, Li, Span } from '../../data/styles';

const Img = styled.img`
    width: 24px;
    vertical-align: middle;
`;

class SimilarItems extends React.Component {
    onItemClick(item) {
        this.props.setActiveItem(item.item_name, item.url);
        this.props.getUsedInItems(item.item_id);
    }

    render() {
        const similarItems = this.props.items.map(item =>
            <Li
                className={classnames({'active': item.item_name === this.props.active_item})}
                onClick={() => this.onItemClick(item)}
                key={item.item_id}
            >
                <Img alt="item img" src={'https://image.eveonline.com/Type/' + item.item_id + '_32.png'} />
                <Span>{item.item_name}</Span>
            </Li>
        );

        return (
            (this.props.items.length > 0 ?
            <Wrapper>
                <Headline>Similar Items</Headline>
                <Scrollbars style={{ width: '100%', height: 156 }}>
                    {similarItems}
                </Scrollbars>
            </Wrapper>
            : null)
        );
    }
}

SimilarItems.PropTypes = {
    items: React.PropTypes.array.isRequired,
    active_item: React.PropTypes.string.isRequired,
    setActiveItem: React.PropTypes.func.isRequired,
    getUsedInItems: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        items: state.itemsReducer.items,
        active_item: state.itemsReducer.active_item.name
    };
}

export default connect(mapStateToProps, { setActiveItem, getUsedInItems })(SimilarItems);
