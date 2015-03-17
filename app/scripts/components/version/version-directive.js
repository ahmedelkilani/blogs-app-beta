;(function () {
    'use strict';

    angular.module('blogsApp.version.version-directive', [])

        .directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }]);

}());