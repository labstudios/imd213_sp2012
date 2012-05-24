// JavaScript Document

document.addEvent("domready", function(){
	new Collapser("col1");
	var collapsers = $$(".collapser");
	for(var i = 0; i < collapsers.length;++i)
	{
		new Collapser(collapsers[i]);
	}
});