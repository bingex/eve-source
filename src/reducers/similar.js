import { SET_SIMILAR_ITEMS } from '../actions/types';

const initialState = {
    showSimilar: false,
    items: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SIMILAR_ITEMS:
            return {
                showSimilar: action.items.length > 0,
                items: action.items
            }
        default: return state;
    }
}
