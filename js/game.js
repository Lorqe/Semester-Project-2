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

function rollDice() {
    if(r === 0) {
        var roll = Math.floor(Math.random() * 6) + 1;
        if(roll === 6) {
            r = 0;
        } else {
            r = 1;
        }

        console.log("Player One Rolls: " + roll);

    } else if(r === 1) {
        var roll = Math.floor(Math.random() * 6) + 1;
        if(roll === 6) {
            r = 1;
        } else {
            r = 0;
        }

        console.log("Player Two Rolls: " + roll);
    }
    
}