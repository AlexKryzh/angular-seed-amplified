function LanguagesDrct(LocalizationService) {
    'ngInject';
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/languages.html',
        link: function ($scope) {
            $scope.languages = LocalizationService.get();
            $scope.current = LocalizationService.getCurrent();
            $scope.changeLanguage = function (locale) {
                $scope.current = LocalizationService.set(locale);
                $scope.switchNav(false);
            };
        }
    };
}

export default {
  name: 'languages',
  fn: LanguagesDrct
};
