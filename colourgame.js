
	//Keeps track of number of squares in play - easy/hard mode:
var numSquares = 6;

	//Code to generate random colour in each square
var colors = generateRandomColors(numSquares);

	//Chooses one of the colours to be the solution:
var pickedColor = pickColor();

	//Selects all squares in document:
var squares = document.querySelectorAll(".square");

	//Changes the header text (h1 > span ID colorDisplay)
var colorDisplay = document.getElementById("colorDisplay");

	//Selects message span - 'try again' or 'correct':
var messageDisplay = document.querySelector("#message");

	//change colour of h1 to correct colour as well:
var h1 = document.querySelector("h1");

	//select "new colours" #reset button
var resetButton = document.querySelector("#reset")
	resetButton.addEventListener("click", function(){
		reset();
	});

//mode buttons - would allow us to add extra modes (e.g. extra hard) later on
var modeButtons = document.querySelectorAll(".mode");



//runs everything when the page loads
init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	//set up squares
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		//figure out how many squares to show
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //ternary operator
		reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {

	//add click listeners to squares:
		squares[i].addEventListener("click", function(){

			//grab colour of clicked square:
			var clickedColor = this.style.backgroundColor;

			//compare to pickedColor variable:
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"; //displays message to user
				resetButton.textContent = "Play Again?"//changes button text when user wins
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323"; //fades wrong choices to background colour
				messageDisplay.textContent = "Try Again!"; //displays message to user
			}
		});
	}
}

function reset(){
	//generate all new colours
		colors = generateRandomColors(numSquares);
		//pick a new random colour from array
		pickedColor = pickColor();
		//change colour display to match picked colour
		colorDisplay.textContent = pickedColor;
		//change 'Play Again?' back to 'New Colours'
		resetButton.textContent = "New Colours";
		//Reset the span message from "correct" to blank:
		messageDisplay.textContent = "";
		//change colours of squares on the page
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
			squares[i].style.display = "block"; //ensures all 6 squares show up
			squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}	
		}
		h1.style.backgroundColor = "steelblue"; //style.backgroundColor works in more browsers
}

	
	//for loop to loop through each square and assign a color from the colors array (i.e. index 0 = red)


	// Function which changes all squares to the correct colour:
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){ //we uses 'squares' to change all of those
		//change each colour to match correct colour
		squares[i].style.backgroundColor = color;
	}
}
	//Function to randomly generate RGB numbers
function pickColor(){
	var random = Math.floor(Math.random() * colors.length) //gives us a random number
	return colors[random]; //changes rgb number displayed in h1 span element
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colours to array
	for(var i = 0; i < num; i++){
		//get random colour and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a 'red' from 0 to 255
	var r = Math.floor(Math.random() * 256) //Want 255 to be the greatest number available so round by 1
	//pick a 'green' from 0 to 255
	var g = Math.floor(Math.random() * 256)
	//pick a 'blue' from 0 to 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}