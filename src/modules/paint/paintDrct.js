function PaintDrct($log) {
    'ngInject';
    return {
        restrict: 'E',
        templateUrl: 'paintDrct.html',
        link: function ($scope) {
            var colors = [];
            for (var i = 0.078; i < 1; i+=0.0143) {
                colors.push('#' + Math.floor(i * 16777215).toString(16));
            }
            $scope.line = 5;
            $scope.opacity = 1;
            $scope.colors = colors;
            $scope.color = colors[0];

            $scope.setColor = function(color){
                $scope.color = color;
            };
        }
    };
}

export default {
    name: 'paint',
    fn: PaintDrct
};
