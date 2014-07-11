$(document).ready(function(){ 

	//a funcion that capitalizes the first letter of any name and then concatenates it with the rest 
	//of the letters in that name.
	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.substring(1, str.length);
		}
	
	//takes the full name, normalizes it to lower case, finds where the space is, determines
	//the first name from the last name, then runs the funcion <capitalizeFirst> on 
	//the first and the last name, then concatenates them to return the correct full name.

	function capitalizeName(name){
	   var lowerName = name.toLowerCase();
	   var spaceIndex = lowerName.indexOf(' ');
	   var first = lowerName.substring(0, spaceIndex);
	   var last = lowerName.substring(spaceIndex+1, name.length);
	   return capitalizeFirstLetter(first) + " " + capitalizeFirstLetter(last);   
	}

	//when the <submit> button is clicked
	$('button').click(function(){
	
	//store the user's entry in a variable
		var enteredName = document.getElementById('enteredFormName').value;
		var fixedName = capitalizeName(enteredName)
	//run the <captalizeName> function on the user's entry
		
		
		//update the html in the second form to show the user's entered name
		$('#fixedFormName').val(fixedName);
	});
});

//When the user clicks SUBMIT, store their name (taken from form <enteredFormName>) in 
//variable <enteredName>.
//Use this variable in the function that capitalizes it. Store the result in variable <fixedName>.
//Update the results form <fixedFormName> with the variable.



