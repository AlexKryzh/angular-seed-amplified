describe('LanguagesDrct', function() {

  var element, compile, rootScope, scope, httpBackend;

    beforeEach(function() {
        angular.mock.module('app');

        angular.mock.inject(function(_$compile_, _$rootScope_, _$httpBackend_) {
            rootScope = _$rootScope_;
            scope = _$rootScope_.$new();
            compile = _$compile_,
            httpBackend = _$httpBackend_;
            httpBackend.whenGET('resources/translation/en_us.json').respond(200, {});
            httpBackend.whenGET('resources/translation/es_es.json').respond(200, {});
            element = angular.element('<languages></languages>');
            compile(element)(scope);
            scope.$digest();
        });
    });

    it('should not be empty', function() {
        expect(element.html()).not.toBe('');
    });

    it('should render correct html', function() {
        expect(element.html().replace(/(\r\n|\n|\r)/gm,'')).toEqual('        <li id="languages-label">            <a><strong class="ng-binding">directives.language-select.Language:</strong></a>        </li>        <!-- ngRepeat: language in languages --><li ng-repeat="language in languages" ng-class="{\'active\': language.code === current}" class="ng-scope">            <a href="" ng-class="language.code" ng-click="changeLanguage(language.code)" ng-bind="language.name" class="ng-binding es_es">Español</a>        </li><!-- end ngRepeat: language in languages --><li ng-repeat="language in languages" ng-class="{\'active\': language.code === current}" class="ng-scope active">            <a href="" ng-class="language.code" ng-click="changeLanguage(language.code)" ng-bind="language.name" class="ng-binding en_us">English</a>        </li><!-- end ngRepeat: language in languages -->');
    });

});