(function() {
	'use strict';

	describe('The home controller', function() {
		beforeEach(module('dbz'));

		var $controller, controller;
		var $scope = {};

		beforeEach(inject(function(_$controller_){
			$controller = _$controller_;
			controller = $controller('homeCtrl',{$scope: $scope});
		}));

		it('should exist', function() {
			expect(controller).toBeDefined();
		});

		describe('the init function', function() {
			it('should return an array of restaurant data', function() {
				var data = [{
					"id": 1,
					"name": "Saiyan Soup and Salad" ,
					"photo": {
						"src": "images/saiyans.jpg",
						"alt": "Goku and Vegeta Eating Ramen"
					},
					"type": "Vegetarian (sometimes)",
					"address": "1234 Snake Way, San Jose, CA",
					"hours": "12:00AM - 12:00AM",
					"reviews": [{
						"name": "Yamcha",
						"date": "10/16/2016",
						"rating": 4,
						"comments": "This place is awesome, dude! I would eat here every day, but to be honest, I get a little intimidated the testosterone levels here..."
					}, {
						"name": "Chi-Chi",
						"date": "11/02/2016",
						"rating": 1,
						"comments": "I hate this place!!! My son needs to be studying, not working in some stupid restaurant!!!!"
					}]
				}, {
					"id": 3,
					"name": "Yajirobe's Yummy Yearnings",
					"photo": {
						"src": "images/humans.png",
						"alt": "Yajirobe Eating a Giant Piece of Dinosaur Meat"
					},
					"type": "Think... Hometown Buffet",
					"address": "",	"address": "1234 Snake Way, San Jose, CA",
					"hours": "11:00AM - 10:00PM",
					"reviews": [{
						"name": "Goku",
						"date": "Everyday",
						"rating": 5,
						"comments": "I know I probably shouldn't talk up my competition, but... gah, this place is delicious!!!"
					}]
				}, {
					"id": 3,
					"name": "Frieza's Wide-Open Fridge",
					"photo": {
						"src": "images/frieza.jpg",
						"alt": "The Ginyu Force Doing their Poses"
					},
					"type": "Dessert",
					"address": "1234 Snake Way, San Jose, CA",
					"hours": "6:00PM - 12:00AM",
					"reviews": [{
						"name": "Krillin",
						"date": "6/12/1991",
						"rating": 1,
						"comments": "Icy, just like her... I mean his soul."
					}]
				}, {
					"id": 4,
					"name": "Beerus' And Whis', Whiskey and Beer",
					"photo": {
						"src": "images/gods.jpg",
						"alt": "Beerus and Whis at a Table"
					},
					"type": "Bar",
					"address": "1234 Snake Way, San Jose, CA",	
					"hours": "12:PM - 2:00AM",
					"reviews": [{
						"name": "Vegeta",
						"date": "8/05/2014",
						"rating": 2,
						"comments": "Beerus slapped my freaking wife! I went off on him though, so it's all good now. The Saki is on point."
					}]
				}];

				controller.init();
				setTimeout(function() {
					expect($scope.diners).toEqual(data);					
				}, 1000);
			});
		});
	});
}());