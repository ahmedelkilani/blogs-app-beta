;(function () {
    'use strict';

    // components module
    blogsApp.components =
        angular.module('blogsApp.components', [
            'blogsApp.components.date',
            'blogsApp.components.version'
        ]);

    // data component module
    blogsApp.components.date =
        angular.module('blogsApp.components.date', []);

    // version component module
    blogsApp.components.version =
        angular.module('blogsApp.components.version', [])

}());
