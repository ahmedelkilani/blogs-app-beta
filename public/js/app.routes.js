;(function () {
    'use strict';

    blogsApp.routes = angular.module('blogsApp.routes', [ 'ngRoute']).
        config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider
                .when('/', {
                    templateUrl: 'views/posts/posts-list.html',
                    controller: 'postsListController'
                })
                .otherwise({redirectTo: '/'});
        }]);

}());