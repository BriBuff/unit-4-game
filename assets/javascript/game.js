var win = 0;
var lose = 0;
var userCounter = 0;
 
var crystalButtons = Math.floor(Math.random() * 12) + 1;
var blueHeart, purpleHeart, redHeart, rainbowHeart

var computerGuess = document.getElementById("randomNumber");
var userNumber = document.getElementById("usernumber");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");


function run () {

    function computerNumber (a, b) {
        var computerNumber = computerGuess
        return Math.floor(Math.random() * (b - a +1) ) + 19;
    }

    computerGuess.textContent = "Random Number: "  + computerNumber(19, 121);


 
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


    // Possibly a for loop/function with all the buttons to get
    // the numbers to add up once the crystal has been pressed.
    // Needed to make the if/else if statement work to produce wins/losses/reset. 
    // userCounter += crystalButtons
    
    // if (userNumber === computerNumber) {
    //     win++;
    //  reset();
    // }

    // else if(userNumber >= computerNumber) {
    //     lose++;
    //     reset ();
    // }


    userNumber.textContent = "Player's number: " + userNumber;
    wins.textContent = "Win: " + win;
    losses.textContent = "Losses: " + lose;

}

run()

// reset()







