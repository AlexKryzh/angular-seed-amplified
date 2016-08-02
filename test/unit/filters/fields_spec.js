describe('Fields Filter', function() {

    var filter;

    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('app');
        angular.mock.module('app.filters');

        // mock the filter
        angular.mock.inject(function(_$filter_) {
            filter = _$filter_;
        });

    });

    it('should search just in specific fields', function() {
        expect(JSON.stringify(filter('fields')([{title:'a', description:'b'},{title:'b', description:'a'}],'a', ['title']))).toEqual('[{"title":"a","description":"b"}]');
    });

    it('should return same items if search is empty', function() {
        expect(JSON.stringify(filter('fields')([{title:'a', description:'b'}],'', ['title']))).toEqual('[{"title":"a","description":"b"}]');
    });

    it('should return same items if property name is empty', function() {
        expect(JSON.stringify(filter('fields')([{title:'a', description:'b'}],'a', undefined))).toEqual('[{"title":"a","description":"b"}]');
    });

});