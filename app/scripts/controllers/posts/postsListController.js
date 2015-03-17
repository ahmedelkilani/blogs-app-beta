;(function () {
    'use strict';

    angular.module('blogsApp.posts', ['blogsApp.posts.services'])

        .controller('PostsListController', ['$scope', 'PostsService', function ($scope, postsService) {

            $scope.posts = postsService.posts.query();

        }]);

}());