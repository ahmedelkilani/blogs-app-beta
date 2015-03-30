;(function () {
    'use strict';

    // posts services

    blogsApp.services
        .service('postsService', ['appResource', 'routes',
            function (appResource, routes) {
                this.getPosts = function() {
                    return appResource.resource(routes.postsService).query();
                };
            }]);

}());