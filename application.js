$(document).ready(function(){ 

	
	//global funciton
	//function capitalizeFirstLetter(str) {
	//	return str.charAt(0).toUpperCase() + str.substring(1, str.length);
	//	}
	
	//global function
	//function capitalizeName(name){
	   // var lowerName = name.toLowerCase();
	  //  var spaceIndex = lowerName.indexOf(' ');
	  //  var first = lowerName.substring(0, spaceIndex);
	  //  var last = lowerName.substring(spaceIndex+1, name.length);
	  //  return capitalizeFirstLetter(first) + " " + capitalizeFirstLetter(last);   
	//	}

	//when the <submit> button is clicked
	$('button').click(function(){
	
	//store the user's entry in a variable
		var enteredName = document.getElementById('enteredFormName').value;
		
		//update the html in the second form to show the user's entered name
		$('#fixedFormName').value(enteredName);
	});
}

//When the user clicks SUBMIT, store their name (taken from form <enteredFormName>) in 
//variable <enteredName>.
//Use this variable in the function that capitalizes it. Store the result in variable <fixedName>.
//Update the results form <fixedFormName> with the variable.