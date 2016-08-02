function DefaultImageDrct($log) {
    'ngInject';
    return {
        scope: {},
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src !== attrs.defaultImage) {
              attrs.$set('src', attrs.defaultImage);
              scope.src = attrs.defaultImage;
            }
          });
        }
    };
}

export default {
  name: 'defaultImage',
  fn: DefaultImageDrct
};
