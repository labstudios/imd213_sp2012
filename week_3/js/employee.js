var Employee = new Class({
	
	//Extends: ,
	
	Implements: [Options, Events],
	
	options:{
		firstName: "John",
		lastName: "Fredericks",
		position: "janitor"
	},

	initialize: function(options)
	{
		this.setOptions(options);
		console.log(this.options.firstName + " " + this.options.lastName + " created.");
	},
	
	punchIn: function()
	{
		console.log(this.options.firstName + " " + this.options.lastName + " punched in.");
	},
	
	punchOut: function()
	{
		console.log(this.options.firstName + " " + this.options.lastName + " punched out.");
	}
});