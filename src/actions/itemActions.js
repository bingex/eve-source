import axios from 'axios';
import { SET_SIMILAR_ITEMS } from './types';

export function getSimilarItems(item_id) {
    return dispatch => {
        return axios
            .post('http://ph.eve-productions.org/item/ng_getSimilarItems', { item_id })
            .then((res) => {
                dispatch(setSimilarItems(res.data.items));
            });
    };
}

export function setSimilarItems(items) {
    return {
        type: SET_SIMILAR_ITEMS,
        items: items
    };
}
