import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { item_api } from '../../data/api_url';
import {
    getSimilarItems,
    setSimilarItems,
    getUsedInItems,
    setActiveItem
} from '../../actions/itemActions';
import '../../assets/css/autosuggest.css';

let searchTimer;
const timeDebounce = 300;

const Wrapper = styled.div`
    background-color: rgba(39,39,40,.9);
    padding: 12px 12px 20px 12px;
    margin-top: 3px;
    margin-bottom: 2px;
    position: relative;
`;

const Title = styled.h1`
    font-size: 1.5em;
    float: left;
    font-weight: 500;
    color: #e4d6ba;
    margin: 0;
`;

const P = styled.p`
    position: absolute;
    bottom: 24px;
    right: 12px;
    margin: 0;
    color: #e4d6ba;
    font-size: 14px;

    @media(max-width: 768px) {
        display: block;
        position: inherit;
        bottom: 0;
        right: 0;
    }
`;

const A = styled.a`
    color: #B9964D;
    text-decoration: underline;
    position: relative;
    z-index: 2;
`;

const getSuggestionValue = suggestion => suggestion.item_name;

const renderSuggestion = suggestion => (
    <div>{suggestion.item_name}</div>
);

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({ value: newValue });
        if (!newValue) {
            this.props.setSimilarItems([]);
        }
    }

    onSuggestionsFetchRequested = ({ value }) => {
        if (value.length > 2) {
            clearTimeout(searchTimer);

            searchTimer = setTimeout(() => {
                axios.get(item_api.search_item + value).then(
                    res => {
                        this.setState({ suggestions: res.data.items });
                    }
                ).catch(
                    err => {
                        console.log(err);
                    }
                );
            }, timeDebounce);
        }
    }

    onSuggestionSelected = (event, { suggestion, suggestionValue, sectionIndex, method }) => {
        this.props.setActiveItem(suggestion.item_id, suggestion.item_name, suggestion.url);
        this.props.getSimilarItems(suggestion.item_id);
        this.props.getUsedInItems(suggestion.item_id, 1);
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    }

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Enter Type Name',
            value,
            onChange: this.onChange
        };

        return (
            <Wrapper>
                <Title>Where components used? {this.props.active_item.name}</Title>

                <P className={classnames({'hide': !this.props.active_item.url})}>Share:
                    <A href={'http://ph.eve-productions.org/item/' + this.props.active_item.url}>
                        {'http://ph.eve-productions.org/item/' + this.props.active_item.url}
                    </A>
                </P>

                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        active_item: state.itemsReducer.active_item
    };
}

Search.propTypes = {
    getSimilarItems: React.PropTypes.func.isRequired,
    setSimilarItems: React.PropTypes.func.isRequired,
    getUsedInItems: React.PropTypes.func.isRequired,
    setActiveItem: React.PropTypes.func.isRequired,
    active_item: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, {
    getSimilarItems,
    setSimilarItems,
    getUsedInItems,
    setActiveItem
})(Search);
