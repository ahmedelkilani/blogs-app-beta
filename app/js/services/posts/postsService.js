;(function () {
    'use strict';

    // posts services

    blogsApp.services.posts
        .service('postsService', ['appResource', 'routes',
            function (appResource, routes) {
                this.getPosts = function() {
                    return appResource.resource(routes.postsService).query();
                };
            }]);

}());