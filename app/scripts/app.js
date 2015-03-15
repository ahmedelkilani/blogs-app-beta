;
(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('blogsApp', [
        'ngRoute',
        'blogsApp.posts',
        'blogsApp.version',
        'blogsApp.date'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/posts-list'});
        }]);

}());
