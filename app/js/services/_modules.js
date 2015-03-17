;(function () {
    'use strict';

    // services module
    blogsApp.services =
        angular.module('blogsApp.services', [
            'blogsApp.services.core'
        ]);

    // core  services module
    blogsApp.services.core =
        angular.module('blogsApp.services.core', [
            'ngResource'
        ]);

}());
