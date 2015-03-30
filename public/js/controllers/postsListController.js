;(function () {
    'use strict';

    blogsApp.controllers
        .controller('postsListController', ['$scope', 'postsService', function ($scope, postsService) {

            $scope.posts = postsService.getPosts();

        }]);

}());