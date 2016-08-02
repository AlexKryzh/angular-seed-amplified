describe('footer Controller', function() {

    var scope, FooterCtrl;

    beforeEach(function(){
        angular.mock.module('app');

        angular.mock.inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();

            FooterCtrl = $controller('FooterCtrl', {
                "$scope": scope
            });

        });
    });

    it('should exist', function() {
        expect(FooterCtrl).toBeDefined();
    });

    it('should have date defined', function() {
        expect(scope.date).toBeDefined();
    });

});