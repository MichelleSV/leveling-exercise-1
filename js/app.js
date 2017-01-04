var destiny = [
	"Te sacarás la lotería",
	"Tendrás un bebé",
	"Te dará gripe",
	"Encontrarás trabajo",
	"Te visitará tu ser amado",
	"Te pedirán matrimonio",
	"Te van a atropellar",
	"Te llegará un ingreso extra",
	"Te vas a caer",
	"Conocerás al amor de tu vida",
	"Tu código compilará hoy",
	"No tendrás conflictos en el Git",
	"Te faltará un ';' en tu código, sé cauteloso",
	"Te darán un aumento",
	"Saldrás temprano del trabajo"
];

var lengthName = [
	"La que todo lo sabe",
	"Dichosa de la vida",
	"La que siempre tiene suerte",
	"Una persona feliz",
	"La más entregada en lo que hace",
	"Una muy buena amiga",
	"La más activada",
	"La más tonera",
	"Una muy buena persona"
];
 var meaningOfLastName = [
	 "Eres bondadosa",
	 "Eres hábil",
	 "Eres generosa",
	 "Eres feliz",
	 "Eres muy hermosa"
 ]
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

	var aleatorioDestiny = Math.floor(Math.random()*(destiny.length));

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
	pLetter.text(" La primera letra de tu nombre '" +  name.substring(0,1).toLocaleUpperCase() + "', predice que: " + destiny[aleatorioDestiny]);

	//What does the sum of letters in your name mean?
	var pSumLetter = $("<p></p>");
	pSumLetter.text(" La suma de las letras de tu nombre '" + name.length + "', indica que eres: " + lengthName[name.length-1]);

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
	var aleatorioMeaningOfLastName = Math.floor(Math.random()*(meaningOfLastName.length));

	//Hide #lastName
	$("#lastName").remove();

	//Ask last name
	var lastName = prompt("¿Cuál es tu apellido?");

	//What does your last name mean?
	var plastName = $("<p></p>");
	plastName.text(" Tu apellido '" +  lastName.charAt(0).toUpperCase() + lastName.slice(1) + "', significa que: " + meaningOfLastName[aleatorioMeaningOfLastName]);

	//Add plastName in #container
	$("#container").append(plastName);
};
