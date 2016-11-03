(function() {
	'use strict';

	describe('The restaurant controller', function() {
		beforeEach(module('dbz'));

		var $controller, controller, $state;
		var $scope = {};

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
			controller = $controller('restaurantCtrl',{$scope: $scope});
		}));

		it('should exist', function() {
			expect(controller).toBeDefined();
		});
	});
}());