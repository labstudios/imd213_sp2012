// JavaScript Document

document.addEvent("domready", function(){
	/*new Book("book");
	new Book("book2");*/
	var books = $$(".book");
	for(var i = 0; i < books.length; ++i)
	{
		new Book(books[i]);
	}
});