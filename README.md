# jQuery Load HTML file, TXT file without iframe

Version 1.0.2

## Summary

Simple jQuery plugin to import the external html/txt file into your current html elements

## Author

Louis Ho

## Installation

To include the plugin in your code:

	<script src="jquery.includeHTML.js"></script>
	
or

	<script src="jquery.includeHTML.min.js"></script>

Alternatively, install with [bower](https://github.com/bower/bower): 
	
	bower install jquery.includeHTML

## Requirements/Browsers

THIS PLUGIN REQUIRES AJAX, CHROME WOULD NOT GIVE YOU ANY PREVIEWS. 
YOU NEED TO UPLOAD IT TO THE SERVER SO THAT IT RUNS PERFECTLY.

Works in IE9+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

Tested with jQuery 1.12.x.

## Code Example

**index.html**:

	<html>
		<head>
			<script src="jquery.1.12.4.min.js"></script>
			<script src="jquery.includeHTML.min.js"></script>

			<script>
				$(document).ready(function () {
					$("#container").loadHTML("a.html");
				});
			</script>
		</head>
		<body>
			<div id="container"></div>
		</body>
	</html>

**a.html**:

	<div>
		This is "a.html".
	</div>


See `example.html` in example folder.

## Functions

NOTES: This plugin requires jQuery and Ajax.


There are totally 6 functions are provided in this plugin:

	.loadHTML(Path)		

is used to load external HTML file as html format into your element.

	.appendHTML(Path)		

is used append external HTML file as html format into your element.

	.prependHTML(Path)		
	
is used prepend external HTML file as html format into your element.

	.loadTEXT(Path)		
	
is used load external TXT file as pure text into your element.

	.appendTEXT(Path) 		
	
is used append external TXT file as pure text into your element.

	.prependTEXT(Path)		
	
is used prepend external TXT file as pure text into your element.


All functions require your EXTERNAL HTML FILE PATH as the parameter in the bracket.

## License

This plugin is under the MIT license.
