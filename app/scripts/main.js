(function() {
	'use strict';

	angular.module('dbz', ['ui.router', 'ngAnimate', 'ngMessages'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'templates/home.html',
					controller: 'homeCtrl'
				})
				.state('restaurant', {
					url: '/restaurant/:name',
					templateUrl: 'templates/restaurant.html',
					controller: 'restaurantCtrl',
					params: {
						diner: null,
						dinerSnapshot: null
					}
				});
			$urlRouterProvider
				.otherwise('/home');
		}]);
}());