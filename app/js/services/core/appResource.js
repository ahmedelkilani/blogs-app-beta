;(function () {
    'use strict';

    // appResource  services

    blogsApp.services.core.service('appResource', ['$resource',
            function ($resource,url, paramDefaults, actions, options) {
                return $resource(url, paramDefaults, actions, options);
            }]);

}());