var load = function(){
	//Getting hour
	var hour = new Date().getHours();

	//Creating a div and adding class "greeting"
	var greeting = $("<p></p>");
	greeting.addClass("greeting");

	//Putting the text depending on the time
	if(hour>=4 && hour<=11){
		greeting.text("Buenos días :D");
	}else if(hour>=12 && hour<=17){
		greeting.text("Buenas tardes :)");
	}else{
		greeting.text("Buenas noches 7u7");
	}

	//Add greeting
	$("#container").prepend(greeting);

	//Event click for #next
	$("#next").click(getData);
};

$(document).ready(load);

var getData = function(){
	//Ask name
	var name = prompt("¿Cuál es tu nombre?, ¡Te diré tu destino!");

	//Hide previous items
	$(".greeting").remove();
	$("#next").remove();

	//Greeting
	var pName = $("<p></p>");
	pName.text("Hola " + name.charAt(0).toUpperCase() + name.slice(1) + ", mucho gusto :)");

	//What does the first letter of your name mean?
	var pLetter = $("<p></p>");
	pLetter.text(" La primera letra de tu nombre '" +  name.substring(0,1).toLocaleUpperCase() + "', indica: ");

	//What does the sum of letters in your name mean?
	var pSumLetter = $("<p></p>");
	pSumLetter.text(" La suma de las letras de tu nombre '" + name.length + "', indica: ");

	//add greeting, pLetter and pSumLetter in #container
	$("#container").prepend(pSumLetter);
	$("#container").prepend(pLetter);
	$("#container").prepend(pName);

	//Showing up button
	$("#lastName").fadeIn();

	//Event click for #lastName
	$("#lastName").click(askLastName);
}
var askLastName = function(){
	//Hide #lastName
	$("#lastName").remove();

	//Ask last name
	var lastName = prompt("¿Cuál es tu apellido?");

	//What does your last name mean?
	var plastName = $("<p></p>");
	plastName.text(" Tu apellido '" +  lastName.charAt(0).toUpperCase() + lastName.slice(1) + "', significa: ");

	//Add plastName in #container
	$("#container").append(plastName);
};
