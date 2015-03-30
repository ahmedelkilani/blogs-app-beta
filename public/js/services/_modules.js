;(function () {
    'use strict';

    // services module =
    blogsApp.services =
        angular.module('blogsApp.services', [
            'blogsApp.services.core',
            'blogsApp.services.routes'
        ]);

    // core services module
    blogsApp.services.core =
        angular.module('blogsApp.services.core', [
            'ngResource'
        ]);

    // services routes module =
    blogsApp.services.routes =
        angular.module('blogsApp.services.routes', []);

}());
