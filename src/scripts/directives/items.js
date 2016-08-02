function ItemsDrct(ItemsService, PaginationService, $state, $anchorScroll, $filter, $log) {
    'ngInject';
    return {
        restrict: 'E',
        scope: { itemsApi: '=', step: '=', currentPage: '=', showPages: '=', options: '=', emitEvent: '='  },
        templateUrl: 'directives/items.html',
        link: function ($scope) {

            var getPagination = function(){
                var items = $filter('fields')($scope.items, $scope.options.filter, ['title', 'description', 'email', 'price']);
                var pagination = PaginationService.get(items, $scope.currentPage, $scope.step, $scope.showPages);
                $scope.pages = pagination.pages;
                $scope.lastPage = pagination.last_page;
            };

            $scope.setPage = function(id){
                $scope.currentPage = id > 0 ? id : 1;
                getPagination();
                $anchorScroll();
            };

            $scope.reloadItems = function(){
                var id= 1;
                $state.transitionTo($state.current, {page: id}, {notify: false});
                $scope.setPage(id);
            };

            $scope.switchFavorite = function(item){
                item.favorite = item.favorite? false : true;
            };

            $scope.switchFavoritesList = function(){
                $scope.ShowFavorites = !$scope.ShowFavorites;
                $scope.emitEvent('$switchPageScroll', { status: $scope.ShowFavorites? true : false });
            };

            ItemsService.get($scope.itemsApi).then(function(data){
                var items = data.items;
                if(items.length === 0){
                    $scope.options.alert = {
                        type: 'warning',
                        text: 'directives.items.empty'
                    };
                }else{
                    angular.forEach(items, function(item, key) {
                        //ensure that price is integer
                        items[key].price = parseInt(item.price, 10);
                    });
                    $scope.items = items;
                    getPagination();
                }
            }, function(error){
                //we can use error for details
                $scope.options.alert = {
                    type: 'danger',
                    text: 'directives.items.error'
                };
            });
        }
    };
}

export default {
  name: 'items',
  fn: ItemsDrct
};
