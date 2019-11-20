function init() {
    let pOne = sessionStorage.getItem("PlayerOne");
    let pTwo = sessionStorage.getItem("PlayerTwo");

    var pOneHolder = document.getElementById("playerOneChar");
    var pTwoHolder = document.getElementById("playerTwoChar");

    pOneHolder.innerHTML = pOne;
    pTwoHolder.innerHTML = pTwo;
}

init();


var playerOne;
var playerTwo;
var r = 0;
var totalOne = 0;
var totalTwo = 0;

function rollDice() {
    if(r === 0) {
        var roll = Math.floor(Math.random() * 6) + 1;
        totalOne = totalOne + roll;
        if(roll === 6) {
            r = 0;
        } else {
            r = 1;
        }

        if(totalOne >= 30) {
            totalOne = 30;
            alert("PLAYER 1 WINS!");
        }

        console.log("Player One Rolls: " + roll);

    } else if(r === 1) {
        var roll = Math.floor(Math.random() * 6) + 1;
        totalTwo = totalTwo + roll;
        if(roll === 6) {
            r = 1;
        } else {
            r = 0;
        }

        if(totalTwo >= 30) {
            totalTwo = 30;
            alert("PLAYER 2 WINS!");
        }

        console.log("Player Two Rolls: " + roll);
    }
    
}