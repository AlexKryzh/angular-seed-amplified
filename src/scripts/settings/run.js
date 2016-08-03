function OnRun($rootScope, $translate, AppSettings, $log) {
    'ngInject';

    //app settings
    $rootScope.AppSettings = AppSettings;

    //Print AppSettings in console
    $log.debug('AppSettings: ', AppSettings);

    //Switch body scroll
    $rootScope.$on('$switchPageScroll', (event, args) => {
        $rootScope.hidePageScroll  = args.status;
    });

    //Switch general loading
    $rootScope.$on('$switchLoading', (event, args) => {
        $rootScope.hideLoading  = args.status;
        $rootScope.hidePageScroll  = !args.status;
    });

    //Switch menu navigation
    $rootScope.switchNav = function(status = !$rootScope.openNav){
        $rootScope.openNav = status;
    };

    //change page based on state
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {

        //page config
        $rootScope.page = {
            state: {
                name: toState.name
            }
        };

        //hide menu
        $rootScope.switchNav(false);

        if(toState.title){
            $rootScope.pageTitle = $translate.instant(toState.title);
            //$rootScope.pageTitle += ' \u2014 ';
        }

        //investigate this for jQueryLite
        //var $html = angular.element(document).find('html');

    });
}

export default OnRun;