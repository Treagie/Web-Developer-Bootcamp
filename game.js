//create secretNumber
var secretNumber = 4

//ask user for guess
var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);
//check guess is right
//use Number(guess)) so the console reads the user's guess as a number, not a string.
if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

//check if guess is higher
else if (guess > secretNumber) {
	alert("Too high! Guess again!")
}

//check if guess is too low - unneccessary code: reduce to the 'else' statement
//else if (Number(guess) < secretNumber) {
//	alert("Too")
// }

//otherwise, you got it wrong
else {
	alert("Too low, guess again!")
}