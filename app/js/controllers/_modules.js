;(function () {
    'use strict';

    // controllers module
    blogsApp.controllers =
        angular.module('blogsApp.controllers', [
            'blogsApp.controllers.posts'
        ]);

    // posts controller module
    blogsApp.controllers.posts =
        angular.module('blogsApp.controllers.posts', [
            'blogsApp.services.posts'
        ]);

}());
