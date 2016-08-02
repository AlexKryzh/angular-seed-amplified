function FooterCtrl($scope) {
    'ngInject';

    $scope.date = new Date();
}

export default {
  name: 'FooterCtrl',
  fn: FooterCtrl
};