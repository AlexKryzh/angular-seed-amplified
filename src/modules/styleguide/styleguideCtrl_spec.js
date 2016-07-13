describe('StyleGuide Controller', function() {

    var scope, styleguideCtrl;

    beforeEach(function(){
        angular.mock.module('app');

        angular.mock.inject(function ($controller) {
            scope = {};

            styleguideCtrl = function() {
                return $controller('StyleGuideCtrl', { '$scope': scope});
            };
        });
    });

    it('should exist', function() {
        expect(styleguideCtrl).toBeDefined();
    });

});