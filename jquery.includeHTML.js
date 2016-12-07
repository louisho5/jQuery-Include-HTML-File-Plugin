/*!
 * Simple jQuery Load HTML file, TXT file without iframe
 *
 * Copyright (c) 2016 Louis Ho
 * Under the MIT license.
 *
 * @version 1.0.0
 */

(function($){


/* .loadHTML() is used to import the external html file into your current html elements */
jQuery.fn.loadHTML = function (url) {

	var thisElement = this;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'text',
		success: function(data) {
			$(thisElement).html(data);
		},
		error: function(e) { console.log(e.message); }
	});

}

/* .appendHTML() is used to import the external html file into your current html elements */
jQuery.fn.appendHTML = function (url) {

	var thisElement = this;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'text',
		success: function(data) {
			$(thisElement).append(data);
		},
		error: function(e) { console.log(e.message); }
	});

}

/* .prependHTML() is used to import the external html file into your current html elements */
jQuery.fn.prependHTML = function (url) {

	var thisElement = this;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'text',
		success: function(data) {
			$(thisElement).prepend(data);
		},
		error: function(e) { console.log(e.message); }
	});

}

/* .loadTEXT() is used to import the external txt file into your current html elements */
jQuery.fn.loadTEXT = function (url) {

	var thisElement = this;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'text',
		success: function(data) {
			$(thisElement).text(data);
		},
		error: function(e) { console.log(e.message); }
	});

}

/* .appendTEXT() is used to import the external txt file into your current html elements */
jQuery.fn.appendTEXT = function (url) {

	var thisElement = this;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'text',
		success: function(data) {
			$(thisElement).append(document.createTextNode(data));
		},
		error: function(e) { console.log(e.message); }
	});

}

/* .prependTEXT() is used to import the external txt file into your current html elements */
jQuery.fn.prependTEXT = function (url) {

	var thisElement = this;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'text',
		success: function(data) {
			$(thisElement).prepend(document.createTextNode(data));
		},
		error: function(e) { console.log(e.message); }
	});

}

})(jQuery);