// JavaScript Document

document.addEvent("domready", function(){
	var response = document.id("response");
	response.dissolve();
	new FormCheck('pineform', {
		submitByAjax: true,
		ajaxResponseDiv: response,
		onAjaxSuccess: function(){
			response.reveal();
			document.id('pineform').dissolve();
		}
	});
});