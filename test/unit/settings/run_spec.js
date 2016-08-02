describe('Settings Run', function() {

    var $rootScope;

    beforeEach(function(){
        angular.mock.module('app');
        angular.mock.inject(function (_$rootScope_){
            $rootScope = _$rootScope_;
        });

    });

    it('should change page items on $routeChangeSuccess', function() {
        $rootScope.$broadcast('$routeChangeSuccess');
    });

    it('should have AppSettings defined', function() {
        expect($rootScope.AppSettings).toBeDefined();
    });

    it('should have switchNav method defined', function() {
        expect(angular.isFunction($rootScope.switchNav)).toBe(true);
    });

    it('should have switchNav method wich change $rootScope.openNav value', function() {
            $rootScope.switchNav(true);
        expect($rootScope.openNav).toBe(true);
    });

     it('should respond to the `$switchPageScroll` event', function() {
        var data = {
            status: true
        };
        $rootScope.$emit('$switchPageScroll', data);
        expect($rootScope.hidePageScroll).toBe(true);
    });

     it('should respond to the `$switchLoading` event', function() {
        var data = {
            status: true
        };
        $rootScope.$emit('$switchLoading', data);
        expect($rootScope.hideLoading).toBe(true);
        expect($rootScope.hidePageScroll).toBe(false);
    });

});