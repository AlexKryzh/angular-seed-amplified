function OnRun($rootScope, $translate, AppSettings, $log) {
    'ngInject';

    //app settings
    $rootScope.AppSettings = AppSettings;

    //Print AppSettings in console
    $log.debug('AppSettings: ', AppSettings);

    //change page based on state
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {

        //page config
        $rootScope.page = {
            state: {
                name: toState.name
            }
        };

        if(toState.title){
            $rootScope.pageTitle = $translate.instant(toState.title);
            //$rootScope.pageTitle += ' \u2014 ';
        }

        //investigate this for jQueryLite
        //var $html = angular.element(document).find('html');

    });
}

export default OnRun;