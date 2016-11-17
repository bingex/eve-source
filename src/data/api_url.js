const domain = 'https://silex.eve-productions.org';

export const item_api = {
    get_similar_items: domain + '/search/similar.json?item_id=',
    get_usedin_item: domain + '/item/bpo.json?',
    search_item: domain + '/search/component.json?term='
}
