(function () {
'use strict';

	describe('blogsApp.version module', function() {
	  beforeEach(module('blogsApp.version'));

	  describe('version service', function() {
		it('should return current version', inject(function(version) {
		  expect(version).toEqual('0.1');
		}));
	  });
	});

}());