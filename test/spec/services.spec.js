(function() {
	'use strict';

	describe('The api calls service', function() {
		var apiCalls;
		var URL = '/data.json';
		var badURL= '/dataasdfasf.json';

		beforeEach(module('dbz'));

		beforeEach(inject(function(_apiCalls_) {
			apiCalls = _apiCalls_;
		}));

		it('should exist', function() {
			expect(apiCalls).toBeDefined();
		});

		describe('makeCall method', function() {
			// Check that it returns a valid response with a valid request
			it('should return a status of 200 when a valid request is made', function() {
				apiCalls.makeCall(URL)
					.then(function(response) {
						expect(response.status).toEqual(200);
					});
			});

			// Check that it returns the proper response for an invalid request
			it('should return a status of 400 when an invalid request is made', function() {
				apiCalls.makeCall(badURL)
					.then(function(response) {
						expect(response.status).toEqual(400);
					});
			});
		});
	});
}());