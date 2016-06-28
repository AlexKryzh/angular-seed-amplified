function LocalizationService($translate, AppSettings, $rootScope, tmhDynamicLocale, ToolkitService, $timeout, $filter, $state, $log) {
  'ngInject';

    var _LOCALIZATIONS = AppSettings.localizations;
    if (!_LOCALIZATIONS || _LOCALIZATIONS.length === 0) {
      $log.debug('Localizations are not defined.');
    }

    var currentLocalization = $translate.proposedLanguage(); // because of async loading

    var validateLocalizations = function (localization) {
        // var params = {
        //     values: _LOCALIZATIONS,
        //     filter: {code: localization}
        // };
        // return ToolkitService.filter(params);
        return $filter('filter')(_LOCALIZATIONS, {code: localization}, true);
    };

    // EVENTS
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
        document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html
        tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));// load Angular locale
    });

    $rootScope.$on('$localeChangeSuccess', function () {
        $timeout(function(){
            $rootScope.hideLoading = true;
            $rootScope.pageTitle = $translate.instant($state.current.title);
        }, 1000);
    });

    return {
        set: function (localization) {

            if (!validateLocalizations(localization)) {
                $log.debug('Localization name "' + localization + '" is invalid.');
                return;
            }

            if(currentLocalization !== localization){
                $rootScope.hideLoading = false;
                currentLocalization = localization;
                $translate.use(localization);
            }

            return currentLocalization;
        },

        get: function () {
            return _LOCALIZATIONS;
        },

        getCurrent: function () {
            return currentLocalization;
        }
    };

}

export default {
    name: 'LocalizationService',
    fn: LocalizationService
};