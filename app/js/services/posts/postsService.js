;(function () {
    'use strict';

    // posts services

    blogsApp.services.posts
        .service('postsService', ['$resource',
            function ($resource) {
                this.posts = $resource('server/mocks/posts.json?v=' + new Date().getTime());
        }]);

}());