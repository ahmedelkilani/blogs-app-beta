;(function () {
    'use strict';

    describe('blogsApp.services.core module', function () {

        beforeEach(module('blogsApp.settings'));
        beforeEach(module('blogsApp.services.core'));

        describe('urlService service', function () {
            var urlService, settings;
            beforeEach(function () {
                inject(function ($injector) {
                    urlService = $injector.get('urlService');
                    settings = $injector.get('settings');
                });
            });

            it('should create a mock url with cacheBuster', function () {

                urlService.settings = {
                    useMocks: true,
                    useCacheBuster: true,
                    cacheBuster : 'cacheBuster'
                };
                expect(urlService.createUrl('posts.json')).toEqual(settings.server_base_mock_url + 'posts.json?v=cacheBuster');

            });

            it('should create a mock url without cacheBuster', function () {

                urlService.settings = {
                    useMocks: true,
                    useCacheBuster: false
                };
                expect(urlService.createUrl('posts.json')).toEqual(settings.server_base_mock_url + 'posts.json');

            });

            it('should create a production url without cacheBuster', function () {

                urlService.settings = {
                    useMocks: false,
                    useCacheBuster: false
                };
                expect(urlService.createUrl('posts.json')).toEqual(settings.server_base_url + 'posts.json');

            });

            it('should override the settings by calling paramters', function () {

                urlService.settings = {
                    useMocks: true,
                    useCacheBuster: true
                };
                expect(urlService.createUrl('posts.json', false, false)).toEqual(settings.server_base_url + 'posts.json');

                urlService.settings = {
                    useMocks: false,
                    useCacheBuster: false,
                    cacheBuster : 'cacheBuster'
                };
                expect(urlService.createUrl('posts.json', true, true)).toEqual(settings.server_base_mock_url + 'posts.json?v=cacheBuster');

            });
        });
    });
}());