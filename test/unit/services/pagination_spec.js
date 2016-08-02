describe('PaginationService', function() {

    var PaginationService;

    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject(function(_PaginationService_) {
            PaginationService = _PaginationService_;
        });
    });

    it('should exist', function() {
        expect(PaginationService).toBeDefined();
    });

    it('should return default options with get() method', function() {
        expect(JSON.stringify(PaginationService.get())).toEqual('{"pages":[],"last_page":0}');
    });

    it('should return specific options with get() method', function() {
        expect(JSON.stringify(PaginationService.get([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}], 1, 5, 3))).toEqual('{"pages":[1,2,3],"last_page":3}');
    });

});