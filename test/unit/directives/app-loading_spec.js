describe('AppLoadingDrct', function() {

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
            element = angular.element('<app-loading ng-hide="hideLoading"></app-loading>');
            compile(element)(scope);
            scope.$digest();
        });
    });

    it('should not be empty', function() {
        expect(element.html()).not.toBe('');
    });

    it('should render correct html', function() {
        expect(element.html().replace(/(\r\n|\n|\r)/gm,'')).toEqual('<aside id="app-loading">    <span class="icon icon-gear animation-spin">    </span></aside>');
    });

});
