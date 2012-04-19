// JavaScript Document

var NavModule = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	element: null,
	options:{
		navSelector: ".nav",
		navTagSelector: "a",
		contentSelector: ".content",
		contentTagSelector: "div"
	},

	initialize: function(el, op)
	{
		this.element = document.id(el);
		this.setOptions(op);
		
		this.nav = this.element.getElement(this.options.navSelector);
		this.content = this.element.getElement(this.options.contentSelector);
		this.navTags = this.nav.getChildren(this.options.navTagSelector);
		this.conTags = this.content.getChildren(this.options.contentTagSelector);
		
		this.navTags.addEvent("click", this.navClicked.bind(this));
		this.conTags.dissolve();
	},
	
	navClicked: function(ev)
	{
		ev.stop();
		var navTarget = -1;
		for(var i = 0; i < this.navTags.length; ++i)
		{
			if(this.navTags[i] == ev.target)
			{
				navTarget = i;
				break;
			}
		}
		this.conTags.dissolve();
		this.conTags[navTarget].reveal();
		
		return false;
	}
});