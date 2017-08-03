// Define array of possibilities
var alphabet = ["a", "b", "c", "d", "e", "f", "g",
	"h", "i", "j", "k", "l", "m", "n", "o","p","q",
	"r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winTotal =0;
var lossTotal = 0;
var guessesLeft = 10;
var randomIndex = Math.floor(Math.random() * alphabet.length);

// This function is run whenever the user presses a key.
document.onkeyup = function(event){

// Determines which key was pressed.
	var userInput = event.key;
	//Determine if user pressed a letter.
	if (event.keyCode >= 65 && event.keyCode <= 90){

		document.getElementById("guesses").innerHTML += userInput + " ";

		if(guessesLeft > 0){

			if (userInput.toLowerCase() === alphabet[randomIndex]){
				document.getElementById("catMeow").play();
				alert("You are correct! The letter I was thinking was \'" + alphabet[randomIndex] + "\'.");
				winTotal++;
				document.getElementById("wins").innerHTML = winTotal;
				guessesLeft = 10;
				document.getElementById("gLeft").innerHTML = guessesLeft;
				document.getElementById("guesses").innerHTML = ""; 
				randomIndex = Math.floor(Math.random() * alphabet.length);
				}	

			else if (userInput.toLowerCase() != alphabet[randomIndex]){
				guessesLeft--;
				document.getElementById("gLeft").innerHTML = guessesLeft;
				}
		}
		//When the guess count decreases to 0
		else{
			document.getElementById("sadMeow").play();
			alert("You ran out of guesses! The letter I was thinking of was \'" + alphabet[randomIndex] + "\'.");
			lossTotal++;
			document.getElementById("losses").innerHTML = lossTotal;
			guessesLeft = 10;
			document.getElementById("gLeft").innerHTML = guessesLeft;
			document.getElementById("guesses").innerHTML = ""; 
			randomIndex = Math.floor(Math.random() * alphabet.length);
		}
	}
	//If they did not press a letter, ask for one.
	else{
		alert("Please choose a valid letter.");
	}
}
