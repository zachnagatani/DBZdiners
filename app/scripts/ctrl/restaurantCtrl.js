(function() {
	'use strict';

	angular
		.module('dbz')
		.controller('restaurantCtrl', ['$scope', '$state', '$filter', function($scope, $state, $filter) {
			$scope.diner = $state.params.diner;

			if (!$scope.diner) { $state.go('home') };

			$scope.submitReview = function() {
				$scope.review.date = $filter('date')($scope.review.date, 'shortDate');
				$scope.diner.reviews.push($scope.review);
			};
		}]);
}());