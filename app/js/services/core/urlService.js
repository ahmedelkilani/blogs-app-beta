;(function () {
    'use strict';

    blogsApp.services.core
        .service('urlService', [
            function () {

                var scope = this;
                var BASE_URL = 'server/v0.1/', BASE_MOCKS_URL = 'server/mocks/v0.1/';
                scope.settings = {
                    useMocks: true,
                    useCacheBuster: true,
                    cacheBuster: new Date().getTime()
                };

                this.createUrl = function (path) {
                    var scope = this;
                    var baseUrl = scope.settings.useMocks ? BASE_MOCKS_URL : BASE_URL;
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
