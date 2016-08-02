describe('ItemsService', function() {

    var service, $httpBackend;

    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject(function(ItemsService, _$httpBackend_) {
            service = ItemsService;
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('resources/translation/en_us.json').respond(200, {});
            $httpBackend.whenGET('resources/translation/es_es.json').respond(200, {});
        });
    });

    it('should exist', function() {
        expect(service).toBeDefined();
    });

});