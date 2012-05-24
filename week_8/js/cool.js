var Book = new Class({
	
	Implements: [Options, Events],
	
	options:{},

	initialize: function(el, options)
	{
		this.element = document.id(el);
		this.setOptions(options);
		
		this.articles = this.element.getChildren(".article");
		this.headers = this.element.getChildren(".article>h3");
		this.headers.addEvent("click", this.headerClicked.bind(this));
		this.paragraphs = this.element.getElements("p");
		/*this.paragraphs.setStyle("font-size", "20px");
		console.log(this.paragraphs);*/
	},
	
	headerClicked: function(ev)
	{
		var article = ev.target.getParent(".article");
		var p = article.getElements("p");
		this.paragraphs.setStyle("color", "");
		p.setStyle("color", "#0000ff");
	}
});