function ToolkitService($filter, $log){
    'ngInject';

    const service = {};

    service.filter = function(params) {
        if(params.values && params.filter){
            var found = $filter('filter')(params.values, params.filter, true);
            if(found.length){
                return true;
            }
        }else{
            $log.debug('Required params are not defined.', params);
        }
    };

    return service;

}

export default {
    name: 'ToolkitService',
    fn: ToolkitService
};