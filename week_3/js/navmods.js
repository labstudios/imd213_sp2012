// JavaScript Document

document.addEvent("domready", function(){
	var nav1 = new NavModule("navigation");
	var nav2 = new NavModule("subnav");
	var nav3 = new NavModule("nav3", {
		navTagSelector: "li"
	});
});