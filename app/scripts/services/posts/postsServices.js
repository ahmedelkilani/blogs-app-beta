;
(function () {
    'use strict';

    // posts services

    angular.module('blogsApp.posts.services', ['ngResource'])
        .service('PostsService', ['$resource',
            function ($resource) {
                this.posts = $resource('server/mocks/posts.json?v=' + new Date().getTime());
        }]);

}());