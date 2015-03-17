;(function () {
    'use strict';

    // posts services

    blogsApp.services
        .service('postsData', ['$resource',
            function ($resource) {
                this.posts = $resource('server/mocks/posts.json?v=' + new Date().getTime());
        }]);

}());