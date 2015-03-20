;(function () {
    'use strict';

    blogsApp.services.core
        .service('urlService', ['settings', function (settings) {

            var scope = this;
            scope.settings = {
                useMocks: settings.server_offline_mode,
                useCacheBuster: settings.server_cacheBuster_enabled,
                cacheBuster: new Date().getTime()
            };

            this.createUrl = function (path, useMocks, useCacheBuster) {
                var scope = this;
                useMocks = (useMocks == undefined ? scope.settings.useMocks : useMocks);
                useCacheBuster = (useCacheBuster == undefined ? scope.settings.useCacheBuster : useCacheBuster);
                var baseUrl = useMocks ? settings.server_base_mock_url : settings.server_base_url;
                var url = new URI(baseUrl + path);

                if (useCacheBuster) {
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
