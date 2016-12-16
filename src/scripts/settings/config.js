function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $logProvider, $translateProvider, tmhDynamicLocaleProvider, AppSettings) {
    'ngInject';

    //Routes
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    $stateProvider
    .state('home', {
        url: '/',
        title: 'page.home.title',
        templateUrl: 'home.html',
        resolve: {
            list_deps: function($ocLazyLoad){
                return $ocLazyLoad.load({
                    files: ['/scripts/home.js']
                });
            }
        }
    })

    .state('items', {
        url: '/items?page',
        params: { page: '1', squash: true },
        title: 'page.items.title',
        controller: 'ItemsCtrl as items',
        templateUrl: 'items.html',
        resolve: {
            list_deps: function($ocLazyLoad){
                return $ocLazyLoad.load({
                    files: ['/scripts/items.js']
                });
            }
        }
    })

    .state('paint', {
        url: '/paint',
        title: 'page.paint.title',
        controller: 'paintCtrl as paint',
        templateUrl: 'paint.html',
        resolve: {
            list_deps: function($ocLazyLoad){
                return $ocLazyLoad.load({
                    files: ['/scripts/paint.js']
                });
            }
        }
    })

    .state('styleguide', {
        url: '/styleguide',
        title: 'page.styleguide.title',
        controller: 'styleguideCtrl as styleguide',
        templateUrl: 'styleguide.html',
        resolve: {
            list_deps: function($ocLazyLoad){
                return $ocLazyLoad.load({
                    files: ['/scripts/styleguide.js']
                });
            }
        }
    });

    $urlRouterProvider.otherwise('/');

    //debug logs
    var cache_buster = '';
    if(AppSettings.development){
        $logProvider.debugEnabled(true);
    }else{
        $logProvider.debugEnabled(false);
        cache_buster = '.' + AppSettings.cache_buster;
    }

    //locale
    tmhDynamicLocaleProvider.localeLocationPattern('resources/locale/{{locale}}' + cache_buster + '.js');

    //translations
    //'sanitize' strategy has issues with utf-8 encoding
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/translation/',// path to translations files
        suffix: cache_buster + '.json'// suffix, currently- extension of the translations
    });

    $translateProvider.preferredLanguage(AppSettings.defaultLocalization); // is applied on first load
    $translateProvider.useLocalStorage(); // saves selected language to localStorage

    $translateProvider.useMissingTranslationHandlerLog();

}

export default OnConfig;