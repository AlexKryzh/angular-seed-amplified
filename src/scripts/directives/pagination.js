function PaginationDrct($log) {
    'ngInject';
    return {
        restrict: 'E',
        scope: { currentPage: '=', pages: '=', lastPage: '=', setPage: '=' },
        templateUrl: 'directives/pagination.html',
        link: function ($scope) {

        }
    };
}

export default {
  name: 'pagination',
  fn: PaginationDrct
};
