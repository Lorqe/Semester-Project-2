var volumeOn = document.getElementById("volumeOn");
var volumeOff = document.getElementById("volumeOff");
var audio = document.getElementById("audioFile");

volumeOn.addEventListener("click", event => {
    volumeOn.style.display = "none";
    volumeOff.style.display = "block";
    audio.muted = true;
});

volumeOff.addEventListener("click", event => {
    volumeOn.style.display = "block";
    volumeOff.style.display = "none";
    audio.muted = false;
});