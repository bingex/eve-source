import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Headline, Wrapper, Li, Span } from '../../data/styles';

const Img = styled.img`
    width: 32px;
    vertical-align: middle;
`;

const Ul = styled.ul`
    padding-left: 0;
    margin: 0;
`;

class ItemInfo extends React.Component {
    render() {
        const usedInItems = this.props.items.map(item =>
            <Li key={item.blueprint_id}>
                <Img alt="item img" src={'https://image.eveonline.com/Type/' + item.blueprint_id + '_32.png'} />
                <Span>{item.blueprint_name}</Span>
            </Li>
        );

        return (
            (this.props.items.length > 0 ?
            <Wrapper>
                <Headline>{this.props.active_item} used in</Headline>
                <Ul>{usedInItems}</Ul>
            </Wrapper>
            : null)
        );
    }
}

ItemInfo.PropTypes = {
    items: React.PropTypes.array.isRequired,
    active_item: React.PropTypes.string.isRequired
}

function mapStateToProps(state) {
    return {
        items: state.itemsReducer.used_in_items,
        active_item: state.itemsReducer.active_item.name
    };
}

export default connect(mapStateToProps, {})(ItemInfo);
