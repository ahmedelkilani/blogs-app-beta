;(function () {
    'use strict';

    // posts services

    blogsApp.services.posts
        .service('postsService', ['appResource',
            function (appResource) {
                this.getPosts = function() {
                    return appResource.resource('server/mocks/posts.json?v=' + new Date().getTime()).query();
                };
            }]);

}());