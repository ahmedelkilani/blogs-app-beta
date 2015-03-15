(function () {
'use strict';

	angular.module('blogsApp.version.interpolate-filter', [])

	.filter('interpolate', ['version', function(version) {
	  return function(text) {
		return String(text).replace(/\%VERSION\%/mg, version);
	  };
	}]);
}());