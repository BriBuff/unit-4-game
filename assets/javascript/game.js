var wins = 0;
var losses = 0;
 
var crystalButtons = Math.floor(Math.random() * 12) + 1;
var blueHeart
var purpleHeart
var redHeart
var rainbowHeart

var computerGuess = document.getElementById("randomNumber");
var userNumber = document.getElementById("usernumber");
var win = document.getElementById("wins");
var lose = document.getElementById("losses");



function computerNumber (19, 120) {
    return Math.floor(Math.random() * (120 - 19 +1) ) + 19;
}

computerGuess.textContent = "Computer guess "  + computerNumber;


$("#blue.heart").on("click", function) {
    blueHeart.val(crystalButtons);
}

$("#purple.heart").on("click", function) {
    purpleHeart.val(crystalButtons);
}

$("#red.heart").on("click", function) {
    redHeart.val(crystalButtons);
}

$("rainbow.heart").on("click", function) {
    rainbowHeart.val(crystalButtons);
}

computerGuess.textContent = "Random Number: " + computerGuess;
userNumber.textContent = "Player's number: " + userNumber;
win.textContent = "Win: " + win;
lose.textContent = "Losses: " + lose;











