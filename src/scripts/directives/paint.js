function PaintDrct($log) {
    'ngInject';
    return {
        restrict: 'E',
        templateUrl: 'directives/paint.html',
        link: function ($scope) {
            var colors = [];
            for (var i = 0.5; i < 1; i+=0.009) {
                colors.push(Math.floor(i * 16777215).toString(16));
            }
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
