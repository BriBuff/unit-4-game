var win = 0;
var lose = 0;
 
var crystalButtons = Math.floor(Math.random() * 12) + 1;
var blueHeart
var purpleHeart
var redHeart
var rainbowHeart

var computerGuess = document.getElementById("randomNumber");
var userNumber = document.getElementById("usernumber");
var win = document.getElementById("wins");
var lose = document.getElementById("losses");


function run () {

    function computerNumber (a, b) {
        return Math.floor(Math.random() * (b - a +1) ) + 19;
    }

    computerGuess.textContent = "Computer guess "  + computerNumber(19, 121);


    $("#blue.heart").on("click", function () {
        blueHeart.val(crystalButtons);
    })

    $("#purple.heart").on("click", function() {
        purpleHeart.val(crystalButtons);
    })

    $("#red.heart").on("click", function() {
        redHeart.val(crystalButtons);
    })

    $("rainbow.heart").on("click", function() {
        rainbowHeart.val(crystalButtons);
    })

    if (computerNumber === userNumber) {
        wins++;
    }

    else() {
        losses++;
    }


    userNumber.textContent = "Player's number: " + userNumber;
    win.textContent = "Win: " + win;
    lose.textContent = "Losses: " + lose;

}

run()








