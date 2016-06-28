describe('Trim Filter', function() {

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

    it('should strip whitespace from the beginning and end of a string', function() {
        expect(filter('trim')('   a   ')).toEqual('a');
        expect(filter('trim')('   foo bar   ')).toEqual('foo bar');
        expect(filter('trim')('   ')).toEqual('');
    });

    it('should strip specific chars from the beginning and end of a string', function() {

        expect(filter('trim')('__a__', '__')).toEqual('a');
        expect(filter('trim')('//foo bar//', '//')).toEqual('foo bar');
        expect(filter('trim')('barfoobar', 'bar')).toEqual('foo');
        expect(filter('trim')('barfoobar', 'foo')).toEqual('barfoobar');

    });

    it('should get a !string and not touch it', function() {
        expect(filter('trim')({})).toEqual({});
        expect(filter('trim')([])).toEqual([]);
        expect(filter('trim')(1)).toEqual(1);
        expect(filter('trim')(!1)).toBeFalsy();
    });

});