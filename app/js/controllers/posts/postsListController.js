;(function () {
    'use strict';

    blogsApp.controllers.posts
        .controller('postsListController', ['$scope', 'postsService', function ($scope, postsService) {

            $scope.posts = postsService.getPosts();

        }]);

}());