;(function () {
'use strict';

	// Declare app level module which depends on views, and components
	angular.module('blogsApp', [
	  'ngRoute',
	  'blogsApp.version'
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/'});
	}]);

}());
