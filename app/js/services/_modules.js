;(function () {
    'use strict';

    // services module =
    blogsApp.services =
        angular.module('blogsApp.services', [
            'blogsApp.services.posts'
        ]);

    // core  services module
    blogsApp.services.core =
        angular.module('blogsApp.services.core', [
            'ngResource'
        ]);

    // services routes module =
    blogsApp.services.routes =
        angular.module('blogsApp.services.routes', [
            'blogsApp.services.core'
        ]);


    // posts services
    blogsApp.services.posts =
        angular.module('blogsApp.services.posts', [
            'blogsApp.services.routes',
            'blogsApp.services.core'
        ]);


}());
