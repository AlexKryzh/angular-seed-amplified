describe('FavoriteItemsDrct', function() {

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
            element = angular.element('<favorite-items items="[]" switch-favorite="switchFavorite" switch-favorites-list="switchFavoritesList" options="options"></favorite-items>');
            compile(element)(scope);
            scope.$digest();
        });
    });

    it('should not be empty', function() {
        expect(element.html()).not.toBe('');
    });

});