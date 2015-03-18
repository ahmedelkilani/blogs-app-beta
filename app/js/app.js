;(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    window.blogsApp = angular.module('blogsApp', [
        'blogsApp.settings',
        'blogsApp.routes',
        'blogsApp.services',
        'blogsApp.controllers',
        'blogsApp.components'
    ]);

}());
