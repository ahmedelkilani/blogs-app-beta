(function () {
'use strict';

	angular.module('blogsApp.version', [
	  'blogsApp.version.interpolate-filter',
	  'blogsApp.version.version-directive'
	])

	.value('version', '0.1');

}());