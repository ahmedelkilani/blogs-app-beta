;(function () {
    'use strict';

    describe('blogsApp.services.posts module', function () {

        beforeEach(module('blogsApp.settings'));
        beforeEach(module('blogsApp.services'));

        describe('postsService service', function () {
            var postsService,appResourceMock;

            // --------- Mocking --------- //

            beforeEach(function () {
                module(function ($provide) {
                    $provide.service('appResource', function () {
                        return new blogsApp.mocks.services.appResourceMock();
                    });
                });
            });

            // --------- Injectors --------- //

            beforeEach(function () {
                inject(function ($injector) {
                    postsService = $injector.get('postsService');
                    appResourceMock = $injector.get('appResource');
                });
            });

            it('should get a list of blog posts', function () {

                appResourceMock.resource().query.andReturn(
                    [{'author': 'Ahmed'}]
                );

                expect(postsService.getPosts()[0].author).toBe('Ahmed');

            });

        });
    });
}());