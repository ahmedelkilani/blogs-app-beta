;
(function () {
    'use strict';

    // date formatter filter
    angular.module('blogsApp.date.date-filter', [])
        // default date formatter
        .filter('defaultDate', ['$filter', function ($filter) {
            return function (text) {
                return $filter('date')(text, 'MMM dd, yyyy');
            };
        }]);
}());