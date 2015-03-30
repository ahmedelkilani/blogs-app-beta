;(function () {
    'use strict';

    blogsApp.settings = angular.module('blogsApp.settings', [])
        .value('settings',{
            'server_offline_mode': true,
            'server_cacheBuster_enabled': true,
            'server_base_url':'/v0.1/',
            'server_base_mock_url':'/mocks/v0.1/'
        });
}());