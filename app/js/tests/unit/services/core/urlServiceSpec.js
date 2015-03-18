;(function () {
    'use strict';

    describe('blogsApp.services.core module', function () {
        beforeEach(module('blogsApp.services.core'));

        describe('urlService service', function () {
            var urlService;
            beforeEach(function () {
                inject(function ($injector) {
                    urlService = $injector.get('urlService');
                });
            });

            it('should create a mock url with cacheBuster', function () {

                urlService.settings = {
                    useMocks: true,
                    useCacheBuster: true,
                    cacheBuster : 'cacheBuster'
                };
                expect(urlService.createUrl('posts.json')).toEqual('server/mocks/v0.1/posts.json?v=cacheBuster');

            });

            it('should create a mock url without cacheBuster', function () {

                urlService.settings = {
                    useMocks: true,
                    useCacheBuster: false
                };
                expect(urlService.createUrl('posts.json')).toEqual('server/mocks/v0.1/posts.json');

            });

            it('should create a production url without cacheBuster', function () {

                urlService.settings = {
                    useMocks: false,
                    useCacheBuster: false
                };
                expect(urlService.createUrl('posts.json')).toEqual('server/v0.1/posts.json');

            });
        });
    });
}());