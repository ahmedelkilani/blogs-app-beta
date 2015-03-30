;(function () {
'use strict';

	describe('blogsApp.components.version module', function() {
	  beforeEach(module('blogsApp.components.version'));

	  describe('interpolate filter', function() {
		beforeEach(module(function($provide) {
		  $provide.value('version', 'TEST_VER');
		}));

		it('should replace VERSION', inject(function(interpolateFilter) {
		  expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
		}));
	  });
	});
}());