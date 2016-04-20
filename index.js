var planets = {
	Sun: 27.9,
	Mercury: 0.377,
	Venus: 0.9032,
	Earth: 1,
	Moon: 0.1655,
	Mars: 0.3895,
	Jupiter: 2.640,
	Saturn: 1.139,
	Uranus: 0.917,
	Neptune: 1.148,
	Pluto: 0.06
};


function calculateWeight(){
	var planet = $("#drop-down").val();
	var weight = $("#my_weight").val();
	
	// check if the wight entered is a number and alert if not.
	var notNum = isNaN(weight);
	if (notNum){
		return false;
	}

	var multiplier = planets[planet];

	var output = weight * multiplier;

	return output;
}


function displayWeight(){
	var output = calculateWeight();
	var $label = $("#output");
	var $dropBox = $("#drop-down");
	var planet = $dropBox.val();
	if (!output){
		$label.text("The weight entered is not a number");
		return
	}
	$label.text("Your weight on " + planet + " is " + output + " pounds.")
}


function addToPlanetList(planet, multi){
	//check that the multiplier is a number and alert if not.
	var notNum = isNaN(multi);
	if (notNum){
		alert('The multiplier is not a number');
		return false; 
	}

	planets[planet] = multi;

	return true;
}


addNewPlanet = function(){
	var planet = $("#new-item").val();
	var multi = $("#new_multi").val();

	// a new planet can only be added to the planet list if a valid multiplier 
	// has been specified. if this is the case, the planet will be added to the 
	// drop box. 
	var addIt = addToPlanetList(planet, multi);

	if (addIt){
		addItem(planet)
	}
}


function addItem(itemName){
	var $newOption = $('<option>' + itemName + '</option>');

	// get the drop down box id
	var $selectId = $("#drop-down");

	// add new option to drop down
	$selectId.append($newOption);

	return $selectId;
}


// function below populates the drop box with the names of the planets taken from 
// the planets object.
var createPlanetDrop = function(){
	planetNames = Object.keys(planets);
	planetNames.map(function(i){addItem(i)});
}


$(createPlanetDrop);