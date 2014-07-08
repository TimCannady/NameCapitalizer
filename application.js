$(document).ready(function(){ 

	function capitalizeFirstLetter(str) {
	    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
	}

	function capitalizeName(name){
	    //The string below contains a lower case version of name. Let's use this from now on.
	    var lowerName = name.toLowerCase();

	    var spaceIndex = lowerName.indexOf(' ');
	    var first = lowerName.substring(0, spaceIndex);
	    var last = lowerName.substring(spaceIndex+1, name.length);
	    
	    return capitalizeFirstLetter(first) + " " + capitalizeFirstLetter(last);
	    
	}

$('button').click(function(){
	CapitalizeName("full name")

});