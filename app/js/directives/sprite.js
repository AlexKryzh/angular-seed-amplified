function Sprite($document, $http, $templateCache, $compile, $rootScope) {
    'ngInject';
    var sprites = [];
    return {
            restrict: 'E',
            scope   : {
                symbol: '='
            },
            templateUrl: 'directives/sprite.html',
            link    : function (scope, element, attrs) {
                //var sprite = attrs.sprite;
                var sprite = 'partials/sprite.html';
                // if not already loaded
                if (sprites.indexOf(sprite) < 0) {
                    sprites.push(sprite);
                    $http.get(sprite, {cache: $templateCache}).then(function (response) {
                        var spriteSvg = angular.element(response.data);
                        spriteSvg = $compile(spriteSvg)($rootScope);
                        angular.element($document[0].body).prepend(spriteSvg);
                    });
                }
            }
        };
}

export default {
  name: 'sprite',
  fn: Sprite
};
