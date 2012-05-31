// JavaScript Document

var ContentSlider = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{
		slideWidth: 500
		},
	currentSlide: 0,
	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		
		this.content = this.element.getElement("ul");
		this.left = this.element.getElement(".left");
		this.right = this.element.getElement(".right");
		this.slides = this.content.getChildren("li");
		
		this.left.addEvent("click", this.goLeft.bind(this));
		this.right.addEvent("click", this.goRight.bind(this));
		
		this.keyboard = new Keyboard({
			defaultEventType: 'keyup',
			events: {
				'left': this.goLeft.bind(this),
				'right': this.goRight.bind(this)
			}
		});
		this.keyboard.activate();
	},
	
	goLeft: function()
	{
		this.currentSlide--;
		if(this.currentSlide < 0)
		{
			this.currentSlide = this.slides.length - 1;
		}
		this.animate();
	},
	
	goRight: function()
	{
		this.currentSlide++;
		if(this.currentSlide > this.slides.length - 1)
		{
			this.currentSlide = 0;
		}
		this.animate();
	},
	
	animate: function()
	{
		var targ = this.currentSlide * this.options.slideWidth * -1;
		this.content.tween("left", targ);
	}
});