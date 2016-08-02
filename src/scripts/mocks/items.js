import items from '../../resources/mocks/items.json';

function ProductsMocks($httpBackend) {
    'ngInject';

    $httpBackend.whenGET('items.json').respond(items.items);

}

export default ProductsMocks;