import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.header`
    min-height: 54px;
    background-color: rgba(39,39,40,.9);
`;

const Title = styled.h1`
    color: #fefefe;
    font-size: 20px;
    font-family: orbitron, sans-serif;
    line-height: 54px;
    text-decoration: none;
    margin: 0;
    padding-left: 24px;
`;

const Nav = styled.ul`
    width: 100%;
    font-size: 12px;
    padding: 0;
    margin: 0;
    background-color: ${props => props.submenu ? 'none' : '#0d3647'};
    width: ${props => props.submenu ? '160px' : 'auto'};
    position: ${props => props.submenu ? 'absolute' : 'static'};
    display: ${props => (props.submenu && props.open) ? 'block' : ((props.submenu && !props.open) ? 'none' : 'block')};

    @media(max-width: 600px) {
        width: 100%;
    }
`;

const Li = styled.li`
    border-right: 1px solid #232527;
    display: inline-block;
    background: ${props => props.donate ? '#df4a32' : '#0d3647'};
    width: ${props => props.vertical ? '100%' : 'auto'};
    margin-top: ${props => props.vertical ? '1px' : '0'};

    &:hover {
        background: ${props => props.donate ? 'rgba(223,74,50,.9)' : '#104f64'};
    }

    @media(max-width: 600px) {
        display: block;
    }
`;

const A = styled.a`
    line-height: 2.4em;
    padding: 0 6px;
    text-decoration: none;
    display: block;
    font-size: 12px;
    letter-spacing: .1em;
    font-family: Orbitron, sans-serif;
    color: ${props => props.donate ? '#fefefe' : '#B9964D'};

    &:hover {
        text-decoration: none;
        color: ${props => props.donate ? '#fefefe' : '#B9964D'};
    }
`;

const LiWrapper = styled.div`
    display: inline-block;
    position: relative;

    @media(max-width: 600px) {
        display: block;
    }
`;

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calcMenuOpen: false,
            resMenuOpen: false
        };

        this.onMenuEnter = this.onMenuEnter.bind(this);
        this.onMenuLeave = this.onMenuLeave.bind(this);
    }

    onMenuEnter(param) {
        this.setState({[param]: true});
    }

    onMenuLeave(param) {
        this.setState({[param]: false});
    }

    render() {
        return (
            <div>
                <TitleWrapper>
                    <Title>EVE-Prod.</Title>
                </TitleWrapper>

                <Nav>
                    <LiWrapper
                        onMouseEnter={(param) => this.onMenuEnter('calcMenuOpen')}
                        onMouseLeave={(param) => this.onMenuLeave('calcMenuOpen')}
                    >
                        <Li><A href="#">Calculators</A></Li>
                        <Nav submenu open={this.state.calcMenuOpen ? 'open' : ''}>
                            <Li vertical>
                                <A href="#">BPC Calculator</A>
                            </Li>
                            <Li vertical>
                                <A href="#">Fit Calculator</A>
                            </Li>
                        </Nav>
                    </LiWrapper>

                    <Li><A href="#">Market</A></Li>
                    <Li><A href="#">Where components used</A></Li>

                    <LiWrapper
                        onMouseEnter={(param) => this.onMenuEnter('resMenuOpen')}
                        onMouseLeave={(param) => this.onMenuLeave('resMenuOpen')}
                    >
                        <Li><A href="#">Resources</A></Li>
                        <Nav submenu open={this.state.resMenuOpen ? 'open' : ''}>
                            <Li vertical><A href="#">Planet Resources</A></Li>
                            <Li vertical><A href="#">Moon Resources</A></Li>
                        </Nav>
                    </LiWrapper>

                    <Li donate><A donate href="#">Donate</A></Li>
                </Nav>
            </div>
        );
    }
}

export default Header;
