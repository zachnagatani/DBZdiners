(function() {
	'use strict';

	describe('The index controller', function() {
		beforeEach(module('dbz'));

		var $controller, controller;
		var $scope = {};

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
			controller = $controller('indexCtrl',{$scope: $scope});
		}));

		it('should exist', function() {
			expect(controller).toBeDefined();
		});
	});
}());