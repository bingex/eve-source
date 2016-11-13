import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import '../../assets/css/autosuggest.css';

const Wrapper = styled.div`
    background-color: rgba(39,39,40,.9);
    padding: 12px;
    margin-top: 3px;
`;

const Title = styled.h1`
    font-size: 1.8em;
    color: #e4d6ba;
    margin: 0;
`;

const getSuggestionValue = suggestion => suggestion.item_name;

const renderSuggestion = suggestion => (
    <div>{suggestion.item_name}</div>
);

class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({ value: newValue });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        if (value.length > 2) {
            axios.post('http://ph.eve-productions.org/item/ng_searchItem', {'q': value}).then(
                res => {
                    this.setState({ suggestions: res.data.items });
                }
            ).catch(
                err => {
                    console.log(err);
                }
            );
        }
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
                <Title>Where components used?</Title>

                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </Wrapper>
        );
    }
}

export default SearchInput;
