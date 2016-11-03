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
		}]);
}());