  let book = {
		bookTittle:"Finding me",
		Author:"Viol   a Davis",
		YearPublished:2023,
		bookSummay: function getSummary(){
			return `This amazing book is called ${book.bookTittle},it was written by ${book.Author} in ${book.YearPublished}, it had a good review number of ${book.reviewNumber}.`
		}
};
book.reviewNumber = 1000
delete book.YearPublished
console.log(book.bookSummay())
