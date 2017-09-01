"use strict";
console.log( "bookFactory,js" );

app.factory("BookFactory", function($q,$http) {

	let getBooks = () => {
		let books = [];
		return $q ((resolve, reject) => {
			$http.get('./data/guides.json')
			.then((bookObject) => {
				let bookCollection = bookObject.data.guides;
				resolve(bookCollection);
				console.log( "bookCollection", bookCollection );
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return{getBooks};
});