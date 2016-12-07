# jQuery Load HTML file, TXT file without iframe

Version 1.0.0

## Summary

Simple jQuery plugin to import the external html/txt file into your current html elements

## Author

Louis Ho

## Installation

Include `jquery.includeHTML.min.js` after calling jQuery in the footer. 

Alternatively, install with [bower](https://github.com/bower/bower): bower install jquery.includeHTML

## Requirements/Browsers

THIS PLUGIN REQUIRES AJAX, CHROME WOULD NOT GIVE YOU ANY PREVIEWS. 
YOU NEED TO UPLOAD IT TO THE SERVER SO THAT IT RUNS PERFECTLY.

Works in IE9+, Chrome 14+, Safari 4+, Firefox 3.0+, Opera 10+.

Tested with jQuery 1.12.x.

## Code Example

NOTES: This plugin require jQuery and Ajax

There are totally 6 functions are provided in this plugin:

.loadHTML(Path);		is used to load external HTML file as html format into your element
.appendHTML(Path);		is used append external HTML file as html format into your element
.prependHTML(Path);		is used prepend external HTML file as html format into your element
.loadTEXT(Path);		is used load external TXT file as pure text format into your element
.appendTEXT(Path); 		is used append external TXT file as pure text format into your element
.prependTEXT(Path);		is used prepend external TXT file as pure text format into your element

All functions require your EXTERNAL HTML FILE PATH in the bracket

See `example.html` in example folder.

## License

This plugin is under the MIT license.
