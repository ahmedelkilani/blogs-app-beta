;(function () {
'use strict';

	describe('blogsApp.components.version module', function() {
	  beforeEach(module('blogsApp.components.version'));

	  describe('version service', function() {
		it('should return current version', inject(function(version) {
		  expect(version).toEqual('0.1');
		}));
	  });
	});

}());