import items from '../../resources/mocks/items.json';

function ItemsMocks($httpBackend, AppSettings) {
    'ngInject';

    $httpBackend.whenGET(AppSettings.apiUrl + 'items.json').respond(items);

}

export default ItemsMocks;