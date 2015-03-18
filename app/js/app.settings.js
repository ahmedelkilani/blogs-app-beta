;(function () {
    'use strict';

    blogsApp.settings = angular.module('blogsApp.settings', [])
        .value('settings',{
            'base_url':'server/v0.1/',
            'base_mocks_url':'server/mocks/v0.1/'
        });
}());