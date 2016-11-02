(function() {
	'use strict';

	angular.module('dbz', ['ui.router', 'ngAnimate'])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'templates/home.html',
					controller: 'homeCtrl'
				})
				.state('restaurant', {
					url: '/restaurant',
					templateUrl: 'templates/home.html',
					controller: 'homeCtrl'
				});
			$urlRouterProvider
				.otherwise('/home');
		}]);
}());