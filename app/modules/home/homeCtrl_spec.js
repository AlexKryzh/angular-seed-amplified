describe('Home Controller', function() {

    var scope, homeCtrl, $httpBackend;

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.module('homeModule');

        angular.mock.inject(function ($controller, $rootScope, _$httpBackend_) {
            scope = $rootScope.$new();

            homeCtrl = $controller('homeCtrl', { '$scope': scope});

            $httpBackend = _$httpBackend_;

            var mockLanguageList = {data: 'products'};
            $httpBackend.whenGET('/api/products').respond(200, mockLanguageList);
            $httpBackend.whenGET('resources/translation/en_us.json').respond(200, {});

        });
    });

    it('should exist', function() {
        expect(homeCtrl).toBeDefined();
    });

    it('should getProducts', function() {
        homeCtrl.getProducts();
        $httpBackend.flush();
        expect(homeCtrl.products).not.toEqual('products');
    });

});