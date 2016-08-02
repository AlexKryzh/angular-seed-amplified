describe('Items Controller', function() {

    var scope, ItemsCtrl, $stateParams;

    $stateParams = {page: '1'};

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.module('ItemsModule');

        angular.mock.inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();

            ItemsCtrl = $controller('ItemsCtrl', {
                "$scope": scope,
                "$stateParams": $stateParams
            });

        });
    });

    it('should exist', function() {
        expect(ItemsCtrl).toBeDefined();
    });

    it('should have options defined', function() {
        expect(scope.options).toBeDefined();
    });

    it('should have sort asigned first sorts option', function() {
        expect(scope.options.sort).toEqual(scope.options.sorts[0]);
    });

    it('should asign 1 to CurrentPage', function() {
        expect(scope.CurrentPage).toEqual(1);
    });

});