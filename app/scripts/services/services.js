(function() {
	'use strict';
	angular
		.module('dbz')
		.service('apiCalls', ['$http', function($http) {
			var self = this;

			self.makeCall = function (url) {
				return $http.get(url);
			};
		}]);
}());