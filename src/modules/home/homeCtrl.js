function homeCtrl($scope, $http, $log) {
    'ngInject';

    // ViewModel
    const vm = this;

    vm.getProducts = function(){
        $http({
            method: 'GET',
            url: '/api/products'
        })
        .then(function(response) {
            if(typeof response.data !== 'string'){
                vm.products = response.data;
            }else{
                $log.debug('Wrong format.');
            }
        });
    };

}

export default {
    name: 'homeCtrl',
    fn: homeCtrl
};