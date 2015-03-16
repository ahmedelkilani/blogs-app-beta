;
(function () {
    'use strict';

    angular.module('blogsApp.app.routes', [ 'ngRoute']).
        config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $routeProvider
                .when('/', {
                    templateUrl: 'views/posts/posts-list.html',
                    controller: 'PostsListController'
                })
                .otherwise({redirectTo: '/'});
        }]);

}());