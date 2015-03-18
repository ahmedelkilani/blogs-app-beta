;(function () {
    'use strict';

    describe('blogsApp.services.core module', function () {
        beforeEach(module('blogsApp.services.core'));

        describe('appResource service', function () {
            var $httpBackend, appResource;
            beforeEach(function () {
                inject(function ($injector) {
                    $httpBackend = $injector.get('$httpBackend');
                    appResource = $injector.get('appResource');
                });
            });

            it('should make a successful request to /server/mocks/posts.json', function () {
                $httpBackend.expectGET('/server/mocks/posts.json')
                    .respond([{
                        author: 'Ahmed'
                    }]);


                var result = appResource
                    .resource('/server/mocks/posts.json')
                    .query();

                $httpBackend.flush();

                expect(result[0].author).toEqual('Ahmed');

            });
        });
    });
}());