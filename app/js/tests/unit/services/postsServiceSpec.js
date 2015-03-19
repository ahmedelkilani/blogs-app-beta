;(function () {
    'use strict';

    describe('blogsApp.services.posts module', function () {

        beforeEach(module('blogsApp.settings'));
        beforeEach(module('blogsApp.services'));

        describe('postsService service', function () {
            var postsService;

            // Mocking

            beforeEach(function () {
                module(function ($provide) {
                    $provide.service('appResource', function () {
                        return {
                            resource: function () {
                                return {
                                    query: function () {
                                        return [{'author': 'Ahmed'}];
                                    }
                                };
                            }
                        };
                    });
                });
            });

            // Injectors

            beforeEach(function () {
                inject(function ($injector) {
                    postsService = $injector.get('postsService');
                });
            });

            it('should get a list of blog posts', function () {

                expect(postsService.getPosts()[0].author).toBe('Ahmed');

            });

        });
    });
}());