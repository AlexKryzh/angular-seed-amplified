describe('ItemsDrct', function() {

    var compile, rootScope, scope, isolateScope, httpBackend, element, state;

    beforeEach(function() {
        angular.mock.module('app');

        angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_, _$state_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();
            state = _$state_;
            compile = _$compile_;
            httpBackend = _$httpBackend_;
            httpBackend.whenGET('resources/translation/en_us.json').respond(200, {});
            httpBackend.whenGET('resources/translation/es_es.json').respond(200, {});
            httpBackend.whenGET('/resources/data/items.json').respond(200, {});
            element = angular.element('<items items-api="\'items.json\'" step="5" current-page="1" options="[]" show-pages="3" emit-event="emitEvent"></items>');
            compile(element)(scope);
            scope.$digest();
            isolateScope = element.isolateScope();
        });
    });

    it('should not be empty', function() {
        expect(element.html()).not.toBe('');
    });

    it('should set currentPage after calling setPage() method', function() {
        isolateScope.setPage(5);
        expect(isolateScope.currentPage).toBe(5);
    });

    it('should set favorite property to true after calling switchFavorite() method', function() {
        isolateScope.items= [{}];
        isolateScope.switchFavorite(isolateScope.items[0]);
        expect(isolateScope.items[0].favorite).toBeTruthy();
    });

    it('should set ShowFavorites property to true after calling switchFavoritesList() method', function() {
        isolateScope.emitEvent = function(args){};
        isolateScope.switchFavoritesList();
        expect(isolateScope.ShowFavorites).toBeTruthy();
    });

    it('should call setPage() method when reloadItems() method is called', function() {
        state.transitionTo = function(args){
            isolateScope.test = args;
        };
        isolateScope.reloadItems();
        expect( isolateScope.test.abstract).toBeTruthy();
    });

});