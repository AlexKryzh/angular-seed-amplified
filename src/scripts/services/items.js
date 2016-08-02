function ItemsService($http, AppSettings, $log){
    'ngInject';

    return {
        get: function(itemsApi){
            var promise = $http({
                method: 'GET',
                url: AppSettings.apiUrl + itemsApi
            }).then(function (response) {
                return response.data;
            });
            return promise;
        }
    };
}

export default {
    name: 'ItemsService',
    fn: ItemsService
};