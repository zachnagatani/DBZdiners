(function() {
	'use strict';

	angular
		.module('dbz')
		.controller('restaurantCtrl', ['$scope', '$state', function($scope, $state) {
			$scope.diner = $state.params.diner;

			if (!$scope.diner) { $state.go('home') };
		}]);
}());