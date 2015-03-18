;(function () {
    'use strict';

    describe('blogsApp.components.date module', function() {
        beforeEach(module('blogsApp.components.date'));

        describe('defaultDate filter', function() {

            it('should format the date in MMM dd, yyyy date format', inject(function(defaultDateFilter) {
                expect(defaultDateFilter(new Date(2015, 2, 18))).toEqual('Mar 18, 2015');
            }));
        });
    });
}());