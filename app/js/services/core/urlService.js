;(function () {
    'use strict';

    blogsApp.services.core
        .service('urlService', ['settings', function (settings) {

            var scope = this;
            scope.settings = {
                useMocks: true,
                useCacheBuster: true,
                cacheBuster: new Date().getTime()
            };

            this.createUrl = function (path) {
                var scope = this;
                var baseUrl = scope.settings.useMocks ? settings.base_mocks_url : settings.base_url;
                var url = new URI(baseUrl + path);
                if (scope.settings.useCacheBuster) {
                    url.setQuery('v', scope.settings.cacheBuster);
                }
                return url.toString();
            };

        }])
        .provider('urlServiceProvider', function () {

            // retrieves the urlService
            this.$get = function () {
            };
        });


}());
