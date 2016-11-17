import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { getUsedInItems } from '../actions/itemActions';

const Wrapper = styled.div`
    background-color: rgba(39,39,40,.9);
    border: none;
    border-top: 1px solid #167092;
`;

const PagList = styled.ul`
    padding: 3px;
    margin: 0;
    height: 36px;
`;

const PagLi = styled.li`
    margin: 0 1px;
    background-color: rgba(22,112,146,.4);
    font-size: 12px;
    padding: 11px;
    color: #ffffff;
    cursor: pointer;
    display: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current_page: 1,
            last_page: 1,
            first_visible: 1
        };

        this.changePage = this.changePage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let pages = Math.floor(nextProps.pagData.total_items / 15) + 1;

        this.setState({last_page: pages});
    }

    changePage(index) {
        let { current_page, first_visible, last_page } = this.state;

        switch (true) {
            case (index === 'r'):
                if (current_page + 1 !== last_page) {
                    this.setState({current_page: current_page + 1});
                    this.props.getUsedInItems(this.props.active_item.id, current_page + 1);

                    if (current_page - first_visible >= 7) {
                        this.setState({first_visible: first_visible + 1});
                    }
                }
                break;
            case (index === 'dr'):
                if (current_page + 2 !== last_page) {
                    this.setState({current_page: current_page + 2});
                    this.props.getUsedInItems(this.props.active_item.id, current_page + 2);

                    if (current_page - first_visible >= 6) {
                        this.setState({first_visible: first_visible + 2});
                    }
                }
                break;
            case (index === 'l'):
                if (current_page > 1) {
                    this.setState({current_page: current_page - 1});
                    this.props.getUsedInItems(this.props.active_item.id, current_page - 1);

                    if (current_page + first_visible >= 8 && first_visible > 1) {
                        this.setState({first_visible: first_visible - 1});
                    }
                }
                break;
            case (index === 'dl'):
                if (current_page > 2) {
                    this.setState({current_page: current_page - 2});
                    this.props.getUsedInItems(this.props.active_item.id, current_page - 2);

                    if (current_page + first_visible >= 7 && first_visible > 2) {
                        this.setState({first_visible: first_visible - 2});
                    } else if (first_visible === 2) {
                        this.setState({first_visible: first_visible - 1});
                    }
                } else if (current_page === 2) {
                    this.setState({current_page: current_page - 1});
                    this.props.getUsedInItems(this.props.active_item.id, current_page - 1);
                }
                break;
            default:
                this.setState({current_page: index});
                this.props.getUsedInItems(this.props.active_item.id, index);
                break;
        }
    }

    render() {
        let list = [];
        for (let i = 1; i <= this.state.last_page; i++) {
            list.push(
                <PagLi
                    key={i}
                    onClick={() => this.changePage(i)}
                    className={classnames({
                        'active_pag': i === this.state.current_page,
                        'show-item': (i >= this.state.first_visible && (i < this.state.first_visible + 8))
                    })}
                >
                    {i}
                </PagLi>
            );
        }

        return (
            <Wrapper>
                <PagList>

                    <PagLi onClick={() => this.changePage('dl')} className="show-item">
                        <span className="fa fa-angle-double-left" aria-hidden="true"></span>
                    </PagLi>

                    <PagLi onClick={() => this.changePage('l')} className="show-item">
                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                    </PagLi>

                    {list}

                    <PagLi onClick={() => this.changePage('r')} className="show-item">
                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                    </PagLi>

                    <PagLi onClick={() => this.changePage('dr')} className="show-item">
                        <span className="fa fa-angle-double-right" aria-hidden="true"></span>
                    </PagLi>

                </PagList>
            </Wrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        active_item: state.itemsReducer.active_item
    };
}

Pagination.propTypes = {
    pagData: React.PropTypes.object.isRequired,
    getUsedInItems: React.PropTypes.func.isRequired,
    active_item: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, { getUsedInItems })(Pagination);
