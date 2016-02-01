/**
 * angular-toastr-directive for Toastr
 *
 * @fileoverview  angujarjs directive for jQuery Toastr
 * @version       1.0.0
 * @requires      jQuery 1.7+, Toastr 2.1.2+
 *
 * Released under the MIT license.
 */

/* global toastr:true*/

(function () {
  'use strict';

  angular
    .module('angular-toastr-directive', [])
    .directive('toastr', function () {
      return {
        restrict: 'A',
        scope   : {
          message      : '@',
          positionClass: '@',
          iconClass    : '@',
          title        : '@',
          toastClass   : '@',
          containerId  : '@',
          showMethod   : '@',
          closeButton  : '@',
          tapToDismiss : '@',
          progressBar  : '@',
          timeOut      : '@'
        },
        link    : function (scope, element) {
          angular.element(element).bind('click', function () {
            var options = {
              positionClass: scope.positionClass,
              iconClass    : scope.iconClass,
              toastClass   : scope.toastClass,
              containerId  : scope.containerId,
              showMethod   : scope.showMethod,
              closeButton  : scope.closeButton,
              tapToDismiss : scope.tapToDismiss,
              progressBar  : scope.progressBar,
              timeOut      : scope.timeOut
            };
            toastr.success(scope.message, scope.title, options);
          });
        }
      }
        ;
    });


})();
