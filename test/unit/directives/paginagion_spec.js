describe('PaginationDrct', function() {

  var element, compile, rootScope, scope, httpBackend;

    beforeEach(function() {
        angular.mock.module('app');

        angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();
            compile = _$compile_,
            httpBackend = _$httpBackend_;
            httpBackend.whenGET('resources/translation/en_us.json').respond(200, {});
            httpBackend.whenGET('resources/translation/es_es.json').respond(200, {});
            element = angular.element('<pagination current-page="1" pages="[1,2,3,4,5]" last-page="5" set-page="setPage"></pagination>');
            compile(element)(scope);
            scope.$digest();
        });
    });

    it('should not be empty', function() {
        expect(element.html()).not.toBe('');
    });

});