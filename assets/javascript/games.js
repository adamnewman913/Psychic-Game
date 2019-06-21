var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];

var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var computerletter;


var newGuess = function() {
    computerletter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var TriesSoFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Tick Tock, This Many Guesses Left: " + left;
};

var newGame = function() {
	guessedLetters = [];
    left = 9;
    newLetter();
    guessesLeft();
    TriesSoFar();
}

document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    TriesSoFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == computerletter) {
        	wins++;
        	document.getElementById("wins").innerHTML = "You Got Lucky This:" + wins;
            newGame();
        }
    } else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "I Dominated This Many Times:" + losses;
        newGame();
    }
};

function redButton() {
    document.getElementById("main-container").style.color = "red";
}
