describe('DefaultImageDrct', function() {

  var element, compile, rootScope, scope, isolateScope, httpBackend;

    beforeEach(function() {
        angular.mock.module('app');

        angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();
            compile = _$compile_,
            httpBackend = _$httpBackend_;
            httpBackend.whenGET('resources/translation/en_us.json').respond(200, {});
            httpBackend.whenGET('resources/translation/es_es.json').respond(200, {});
            httpBackend.whenGET('images/default.png').respond(200, {});
            element = angular.element('<img src="" default-image="images/default.png" />');
            compile(element)(scope);
            scope.$digest();
            isolateScope = element.isolateScope();
        });
    });

    it('should replace src attribute', function () {
        // check the value right after directive attribute
    });

});