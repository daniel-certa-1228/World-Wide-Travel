"use strict";
console.log( "bookCtrl.js" );

app.controller('BookCtrl', function($scope, BookFactory) {
	BookFactory.getBooks()
	.then(function(bookCollection){
		$scope.books = bookCollection;
		console.log( "books", $scope.books );
	});
});