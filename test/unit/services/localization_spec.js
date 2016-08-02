describe('LocalizationService', function() {

    var rootScope, LocalizationService;

    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('app');

        // mock the service
        angular.mock.inject(function(_$rootScope_, _LocalizationService_) {
            rootScope = _$rootScope_;
            LocalizationService = _LocalizationService_;
        });
    });

    it('should exist', function() {
        expect(LocalizationService).toBeDefined();
    });

    it('should return specific options with set() method', function() {
        expect(LocalizationService.set('en_us')).toEqual('en_us');
    });

    it('should return array with options by calling get() method', function() {
        expect(JSON.stringify(LocalizationService.get().length)).toBeGreaterThan(0);
    });

    it('should return specific options with getCurrent() method', function() {
        expect(LocalizationService.getCurrent()).toEqual('en_us');
    });

    it('should respond to the `$translateChangeSuccess` event', function() {
        var data = {
            language: 'es_es'
        };
        rootScope.$emit('$translateChangeSuccess', data);
        expect(rootScope.translateChangeSuccess.language).toBe('es_es');
    });

    it('should respond to the `$localeChangeSuccess` event', function() {
        rootScope.$emit('$localeChangeSuccess');
        expect(rootScope.localeChangeSuccess).toBeTruthy();
    });

});