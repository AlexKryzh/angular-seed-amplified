function TranslateLanguage(LocalizationService) {
    'ngInject';
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'directives/translate-language.html',
        link: function ($scope) {
            $scope.languages = LocalizationService.get();
            $scope.current = LocalizationService.getCurrent();
            $scope.changeLanguage = function (locale) {
                $scope.current = LocalizationService.set(locale);
            };
        }
    };
}

export default {
  name: 'translateLanguage',
  fn: TranslateLanguage
};
