function FavoriteItemsDrct($log) {
    'ngInject';
    return {
        restrict: 'E',
        scope: { items: '=', switchFavoritesList: '=', switchFavorite: '=', options: '=' },
        templateUrl: 'directives/favorite-items.html',
        link: function ($scope) {
            
        }
    };
}

export default {
  name: 'favoriteItems',
  fn: FavoriteItemsDrct
};
