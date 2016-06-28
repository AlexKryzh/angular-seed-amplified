import products from '../../resources/mocks/products.json';

function ProductsMocks($httpBackend) {
    'ngInject';

    $httpBackend.whenGET('/api/products').respond(products.list);

}

export default ProductsMocks;