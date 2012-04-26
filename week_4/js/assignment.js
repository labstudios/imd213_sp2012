// JavaScript Document

document.addEvent("domready", function(){
	var firstItem = new MyClass("one");
	var secondItem = new MyClass("two", {
		phrase: "Woodchuck"
	});
	var thirdItem = new MyClass("three", {
		phrase: "Chipmunk"
	});
});