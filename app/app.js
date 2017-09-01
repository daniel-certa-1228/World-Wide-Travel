"use strict";
console.log( "app.js" );

var app = angular.module("BookStoreApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/book-list.html',
		controller: 'BookCtrl'
	}).
	otherwise('/');
});