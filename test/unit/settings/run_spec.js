describe('Settings Run', function() {

    var scope;

    beforeEach(function(){
        angular.mock.module('app');

        angular.mock.inject(function ($controller, $rootScope, _$httpBackend_) {
            scope = $rootScope.$new();
        });
    });

    it('should change page properties on $routeChangeSuccess', function() {
        scope.$broadcast('$routeChangeSuccess');
        console.log(scope.page);
    });

});