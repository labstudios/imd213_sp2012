// JavaScript Document

document.addEvent('domready', function(){
	var topNav = document.id("topnav");
	//var atags = $$("#topnav a"); //this works for a jquery-like selection
	var atags = topNav.getElements("a"); //same idea
	var contentDivs = document.id("content").getChildren("div");
	
	topNav.addEvent("mouseover", function(ev){
		this.addClass("highlight");
	});
	
	topNav.addEvent("mouseout", function(ev){
		this.removeClass("highlight");
	});
	
	atags.addEvent("click", function(ev){
		ev.stop();
		var targ = ev.target.get("data-targ");
		contentDivs.dissolve();
		document.id("content").getElement("div[data-cont='" + targ + "']").reveal();
		/*for(var i = 0; i < contentDivs.length;++i)
		{
			if(contentDivs[i].get("data-cont") == targ)
			{
				console.log(contentDivs[i]);
				contentDivs[i].setStyle("display", "block");
				break;
			}
		}*/
		return false;
	});
});