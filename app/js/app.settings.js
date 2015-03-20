;(function () {
    'use strict';

    blogsApp.settings = angular.module('blogsApp.settings', [])
        .value('settings',{
            'server_offline_mode': true,
            'server_cacheBuster_enabled': true,
            'server_base_url':'server/v0.1/',
            'server_base_mock_url':'server/mocks/v0.1/'
        });
}());