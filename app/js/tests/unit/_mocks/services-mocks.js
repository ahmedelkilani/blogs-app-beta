;(function () {

    // Declaring namespaces
    blogsApp.mocks = blogsApp.mocks || {};
    blogsApp.mocks.services = blogsApp.mocks.services || {};

    // ----- appResourceMock ------ //

    blogsApp.mocks.services.appResourceMock = function () {

        this.resource = jasmine.createSpy('resource').andReturn(
            {
                query: jasmine.createSpy('query')
            });
    };

})();