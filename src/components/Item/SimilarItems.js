import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const Headline = styled.header`
    background-color: #0e394c;
    color: #fefefe;
    letter-spacing: .15em;
    padding: 2px 5px;
    font-family: Orbitron;
    text-align: left;
    font-size: 12px;
    border-bottom: 1px solid #167092;
`;

const Wrapper = styled.section`
    width: 100%;
    background-color: rgba(39,39,40,.9);
    border: 1px solid #167092;
    color: #e4d6ba;
`;

const Li = styled.li`
    background-color: rgba(22,112,146,.2);
    margin: 1px;
    color: #e4d6ba;
    padding: 3px;
    cursor: pointer;
    list-style: none;

    &:hover {
        background-color: rgba(22,112,146,.4);
    }
`;

const Img = styled.img`
    width: 24px;
    vertical-align: middle;
`;

const Span = styled.span`
    padding-left: 3px;
    color: #e4d6ba;
    font-size: 12px;
    font-family: Verdana, Arial, Helvetica,sans-serif;
`;

class SimilarItems extends React.Component {
    render() {
        const similarItems = this.props.items.map(item =>
            <Li key={ item.item_id }>
                <Img alt="img" src="https://image.eveonline.com/Type/16637_32.png" />
                <Span>{item.item_name}</Span>
            </Li>
        );

        return (
            (this.props.showSimilar ?
            <Wrapper>
                <Headline>Similar Items</Headline>
                <Scrollbars style={{ width: '100%', height: 166 }}>
                    {similarItems}
                </Scrollbars>
            </Wrapper>
            : null)
        );
    }
}

SimilarItems.PropTypes = {
    items: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        items: state.similar.items,
        showSimilar: state.similar.showSimilar
    };
}

export default connect(mapStateToProps, {})(SimilarItems);
