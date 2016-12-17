function PaintDrct($log) {
    'ngInject';
    return {
        restrict: 'E',
        scope: {
            options: '='
        },
        templateUrl: 'paintDrct.html',
        link: function ($scope, $element) {
            //CONFIGURATION
            var colors = [];
            ////generate colors
            for (var i = 0.078; i < 1; i+=0.0143) {
                colors.push('#' + Math.floor(i * 16777215).toString(16));
            }

            ////canvas
            var id = 'canvas';
            var height = $scope.options.height;
            var width = $scope.options.width;
            var point = {
                x: 0,
                y: 0
            };
            var points = [];
            ////set scope values
            $scope.version = 0;
            $scope.height = height;
            $scope.width = width;
            $scope.colors = colors;
            $scope.thickness = 5;
            $scope.opacity = 100;
            ////select random color
            $scope.color = colors[Math.floor(Math.random() * colors.length)];
            $scope.history = [];

            //CANVAS
            var CanvasCurrent = document.createElement('canvas');
            CanvasCurrent.id = 'CanvasCurrent';
            var CanvasVersion = document.createElement('canvas');
            CanvasVersion.id = 'CanvasVersion';
            angular.element(CanvasVersion).css({
                position: 'absolute',
                top: 0,
                left: 0
            });

            angular.element(document.querySelector('#canvas')).append(CanvasCurrent);
            angular.element(document.querySelector('#canvas')).append(CanvasVersion);
            var PaintCurrent = CanvasCurrent.getContext('2d');
            var PaintVersion = CanvasVersion.getContext('2d');

            CanvasCurrent.width = CanvasVersion.width = width;
            CanvasCurrent.height = CanvasVersion.height = height;

            ////set context style
            PaintCurrent.fillStyle = '#fff';
            PaintCurrent.fillRect(0, 0, CanvasCurrent.width, CanvasCurrent.height);
            PaintVersion.lineJoin = PaintVersion.lineCap = 'round';
            PaintVersion.lineWidth = $scope.thickness;
            PaintVersion.strokeStyle = $scope.color;

            //WATCHERS
            $scope.$watch('thickness', function(value) {
                if (value) {
                    PaintVersion.lineWidth = value;
                }
            });

            $scope.$watch('color', function(value) {
                if (value) {
                    PaintVersion.strokeStyle = PaintVersion.fillStyle = value;
                }
            });

            $scope.$watch('opacity', function(value) {
                if (value) {
                    PaintVersion.globalAlpha = 0.01 * $scope.opacity;
                }
            });

            $scope.setColor = function(color){
                $scope.color = color;
            };

            var getOffset = function(elem) {
                var offsetTop = 0;
                var offsetLeft = 0;
                do {
                    if (!isNaN(elem.offsetLeft)) {
                        offsetTop += elem.offsetTop;
                        offsetLeft += elem.offsetLeft;
                    }
                    elem = elem.offsetParent;
                } while (elem);
                return {
                    left: offsetLeft,
                    top: offsetTop
                };
            };

            var setPointFromEvent = function(point, e) {
                point.x = e.offsetX !== undefined ? e.offsetX : e.layerX;
                point.y = e.offsetY !== undefined ? e.offsetY : e.layerY;
            };

            var paint = function(e) {
                if (e) {
                    e.preventDefault();
                    setPointFromEvent(point, e);
                }

                // Saving all the points in an array
                points.push({
                    x: point.x,
                    y: point.y
                });

                if (points.length === 3) {
                    var b = points[0];
                    PaintVersion.beginPath();
                    PaintVersion.arc(b.x, b.y, PaintVersion.lineWidth / 2, 0, Math.PI * 2, !0);
                    PaintVersion.fill();
                    PaintVersion.closePath();
                    return;
                }

                PaintVersion.clearRect(0, 0, CanvasVersion.width, CanvasVersion.height);

                PaintVersion.beginPath();
                PaintVersion.moveTo(points[0].x, points[0].y);

                for (var i = 1; i < points.length - 2; i++) {
                    var c = (points[i].x + points[i + 1].x) / 2;
                    var d = (points[i].y + points[i + 1].y) / 2;
                    PaintVersion.quadraticCurveTo(points[i].x, points[i].y, c, d);
                }

                // For the last 2 points
                PaintVersion.quadraticCurveTo(
                    points[i].x,
                    points[i].y,
                    points[i + 1].x,
                    points[i + 1].y
                );
                PaintVersion.stroke();
            };

            var copyImage = function() {
                $scope.$apply(function() {
                    //remove versions that are expired
                    if($scope.history.length > $scope.version + 1){
                        $scope.history.splice($scope.version, $scope.history.length - $scope.version);
                    }

                    //add current version
                    $scope.history.push(PaintCurrent.getImageData(0, 0, CanvasVersion.width, CanvasVersion.height));
                    $scope.version ++;
                });

                CanvasVersion.removeEventListener('mousemove', paint, false);
                PaintCurrent.drawImage(CanvasVersion, 0, 0);
                PaintVersion.clearRect(0, 0, CanvasVersion.width, CanvasVersion.height);
                points = [];
            };

            var startImage = function(e) {
                e.preventDefault();
                CanvasVersion.addEventListener('mousemove', paint, false);

                setPointFromEvent(point, e);
                points.push({
                    x: point.x,
                    y: point.y
                });
                points.push({
                    x: point.x,
                    y: point.y
                });

                paint();
            };

            var updateImage = function(){
                if($scope.history[$scope.version]){
                    PaintCurrent.putImageData($scope.history[$scope.version], 0, 0);
                }
            };

            //HISTORY
            $scope.undo = function() {
                if ($scope.history.length > 0) {
                    $scope.version--;
                    updateImage();
                }
            };

            $scope.redo = function() {
                if ($scope.version < $scope.history.length) {
                    $scope.version++;
                    updateImage();
                }
            };

            var init = function() {
                CanvasVersion.addEventListener('mousedown', startImage, false);
                CanvasVersion.addEventListener('mouseup', copyImage, false);

                var MOUSE_DOWN;

                function mousedown() {
                    MOUSE_DOWN = true;
                }

                function mouseup() {
                    MOUSE_DOWN = false;
                }

                function removeEventListeners() {
                    document.body.removeEventListener('mousedown', mousedown);
                    document.body.removeEventListener('mouseup', mouseup);
                }

                function mouseenter(e) {
                    if (MOUSE_DOWN) {
                        startImage(e);
                    }
                }

                function mouseleave(e) {
                    if (MOUSE_DOWN) {
                        copyImage(e);
                    }
                }

                document.body.addEventListener('mousedown', mousedown);
                document.body.addEventListener('mouseup', mouseup);

                $scope.$on('$destroy', removeEventListeners);

                CanvasVersion.addEventListener('mouseenter', mouseenter);
                CanvasVersion.addEventListener('mouseleave', mouseleave);

            };

            init();

        }
    };
}

export default {
    name: 'paint',
    fn: PaintDrct
};
