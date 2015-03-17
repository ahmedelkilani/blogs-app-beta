;(function () {
    'use strict';

    blogsApp.controllers
        .controller('postsListController', ['$scope', 'postsData', function ($scope, postsData) {

            $scope.posts = postsData.posts.query();

        }]);

}());