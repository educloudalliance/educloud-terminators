angular.module('ui-hexagon', [])
 .directive('hexagon', [function () {
   return {
     restrict: 'E',
     link:function(scope, element, attrs) {
       var tag = '<h6>Temporary Holder</h6>';
       element.append(tag);
     }
   };
 }]);