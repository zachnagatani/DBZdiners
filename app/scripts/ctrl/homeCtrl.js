(function() {
	'use strict';

	angular
		.module('dbz')
		.controller('homeCtrl', ['$scope', '$filter', '$state', 'apiCalls', function($scope, $filter, $state, apiCalls) {
			var self = this;

			self.init = function() {
				apiCalls
					.makeCall('/data.json')
					.then(function(response) {
						$scope.diners = response.data;
					});
			};

			self.init();

			$scope.goToDiner = function(diner) {
					$state.go('restaurant', {
						name: diner.name,
						diner: diner
					});
			};

			$scope.filter = false;

			$scope.toggleFilter = function() {
				$scope.filter === false ? $scope.filter = true : $scope.filter = false;
			};
		}]);
}());