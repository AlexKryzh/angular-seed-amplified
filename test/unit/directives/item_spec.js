describe('ItemDrct', function() {

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
            element = angular.element('<item data="{}" switch-favorite="switchFavorite"></item>');
            compile(element)(scope);
            scope.$digest();
        });
    });

    it('should not be empty', function() {
        expect(element.html()).not.toBe('');
    });

    it('should render correct html', function() {
        expect(element.html().replace(/(\r\n|\n|\r)/gm,'')).toEqual('<article class="item" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/Product">     <img class="image thumbnail ng-isolate-scope" itemprop="image" alt="" default-image="/images/default.png">    <h1>        <button class="btn btn-md btn-default" ng-class="{\'btn-favorite animation-rubber\': data.favorite === true, \'btn-default\': data.favorite !== true}" ng-click="switchFavorite(data)" title="page.items.favorite_add"><span class="icon icon-star"></span></button>         <span itemprop="name" class="ng-binding"></span>    </h1>    <span class="price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">        <span itemprop="price" class="ng-binding"></span>    </span>    <details class="description ng-binding" itemprop="description"><summary class="ng-binding">directives.item.show_description</summary></details>    <span class="email" itemscope="" itemtype="http://schema.org/Person">        <span itemprop="email" class="ng-binding"></span>    </span></article>');
    });

});