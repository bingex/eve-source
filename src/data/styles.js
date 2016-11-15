import styled from 'styled-components';

export const Headline = styled.header`
    background-color: #0e394c;
    color: #fefefe;
    letter-spacing: .15em;
    padding: 5px;
    font-family: Orbitron;
    text-align: left;
    font-size: 12px;
    border-bottom: 1px solid #167092;
`;

export const Wrapper = styled.section`
    width: 100%;
    background-color: rgba(39,39,40,.9);
    border: 1px solid #167092;
    color: #e4d6ba;
`;

export const Li = styled.li`
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

export const Span = styled.span`
    padding-left: 3px;
    color: #e4d6ba;
    font-size: 12px;
    font-family: Verdana, Arial, Helvetica,sans-serif;
`;
