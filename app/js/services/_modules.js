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

    // posts services
    blogsApp.services.posts =
        angular.module('blogsApp.services.posts', [
            'blogsApp.services.core'
        ]);


}());
