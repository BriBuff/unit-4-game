var win = 0;
var lose = 0;
var userCounter = 0;
var computerNumber = 0;
 
var computerGuess = document.getElementById("randomNumber");
var userNumber = document.getElementById("userNumber");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

function randomScore () {
computerNumber = (Math.floor(Math.random() * 102) + 19)
computerGuess.textContent = "Random Number: "  + computerNumber;
$("#blueHeart").attr("dataNum", Math.floor(Math.random() * 12) + 1);
$("#purpleHeart").attr("dataNum", Math.floor(Math.random() * 12) + 1);
$("#redHeart").attr("dataNum", Math.floor(Math.random() * 12) + 1);
$("#rainbowHeart").attr("dataNum", Math.floor(Math.random() * 12) + 1);
userCounter = 0;
}

randomScore();

    $("#blueHeart").on("click", function () {
        console.log("blue", $(this).attr("dataNum"));
        console.log(this);
        addScore($(this).attr("dataNum"));
    })

    $("#purpleHeart").on("click", function() {
        console.log("purple", $(this).attr("dataNum"));
        addScore($(this).attr("dataNum"));
    })

    $("#redHeart").on("click", function() {
        console.log("red", $(this).attr("dataNum"));
        addScore($(this).attr("dataNum"));
    })

    $("#rainbowHeart").on("click", function() {
        console.log("rainbow", $(this).attr("dataNum"));
        addScore($(this).attr("dataNum"));
    })

    function addScore (num) {
        userCounter += parseInt(num);
        console.log(userCounter);
        userNumber.textContent = userCounter;
    


    console.log(computerNumber);
    if (userCounter === computerNumber) {
        win++;
        console.log("win");
        wins.textContent = win;
        randomScore();
    }

    else if (userCounter >= computerNumber) {
        lose++;
        console.log("lose");
        losses.textContent = lose;
        randomScore();
    }

}






