;(function () {
    'use strict';

    // date formatter filter
    blogsApp.components.date
        // default date formatter
        .filter('defaultDate', ['$filter', function ($filter) {
            return function (text) {
                return $filter('date')(text, 'MMM dd, yyyy');
            };
        }]);
}());