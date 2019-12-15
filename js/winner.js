document.getElementById("winnerName").innerHTML = sessionStorage.getItem("winnerName");
document.getElementById("winnerPlayer").innerHTML = sessionStorage.getItem("winnerPlayer");

document.getElementById("playAgain").addEventListener("click", function() {
    window.location = "index.html";
});