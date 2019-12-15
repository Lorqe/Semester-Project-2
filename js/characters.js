// Character Selection UI Changes - And set storage
var playerTurn = 0;
var card = document.getElementsByClassName("charCard");
var instruct__one = document.getElementById("instruct__one");
var instruct__two = document.getElementById("instruct__two");
var selected = 0;
var number = 0;

function chosenChar(x) {

    selected = x;
    document.getElementById("char__name").innerHTML = card[x].dataset.name;
    document.getElementById("char__title").innerHTML = card[x].dataset.title;
    document.getElementById("char__gender").innerHTML = card[x].dataset.gender;
    document.getElementById("char__born").innerHTML = card[x].dataset.born;
    console.log(x);

    document.getElementById("select__char").style.display = "block";
    document.getElementById("char__title").style.display = "block";
    document.getElementById("born").style.display = "block";
    document.getElementById("gender").style.display = "block";

    if(playerTurn === 0) {

        for (var i = 0; i < card.length; i++) {
            card[i].classList.remove("selected");
        }   

        card[x].classList.add("selected");

    } else if (playerTurn === 1) {

        for (var i = 0; i < card.length; i++) {
            card[i].classList.remove("selected");
        }   

        card[x].classList.add("selected");

    } else if (playerTurn > 1) {
        for (var i = 0; i < card.length; i++) {
            card[i].classList.remove("selected");
        }   
    }
}

// Player selection
function charOne() {
    
    if (playerTurn === 0) {
            console.log("Player One is choosing");
            window.sessionStorage.setItem("PlayerOne", card[selected].dataset.name);
            console.log("Player One has selected: " + card[selected].dataset.name);
            card[selected].removeAttribute("onclick");
            card[selected].style.borderColor = "#340707";
            card[selected].style.color = "#707070";
            document.getElementById("instruct__one").style.color = "#340707";
            document.getElementById("instruct__one").style.fontWeight = "700";
            instruct__one.classList.remove("active");
            instruct__two.classList.add("active");
            playerTurn = 1;
    } else if (playerTurn === 1) {
            window.sessionStorage.setItem("PlayerTwo", card[selected].dataset.name);
            console.log("Player Two has selected: " + card[selected].dataset.name);
            card[selected].removeAttribute("onclick");
            card[selected].style.borderColor = "#072234";
            card[selected].style.color = "#707070";
            document.getElementById("instruct__two").style.color = "#072234";
            document.getElementById("instruct__two").style.fontWeight = "700";
            instruct__one.classList.remove("active");
            instruct__two.classList.add("active");
            instruct__two.classList.remove("active");
            playerTurn++;

            document.getElementById("start__btn").removeAttribute("disabled");
            document.getElementById("start__btn").removeAttribute("style");
            document.getElementById("select__char").style.display = "none";
            document.getElementById("start__btn").style.dispaly ="block";
    }
}

document.getElementById("start__btn").addEventListener("click", event => {
    window.location = "game.html";
});



// DATA FROM API
var request = new XMLHttpRequest();
var cards = document.querySelectorAll(".charCard");
var playerOne = "";
var playerTwo = "";

// Open connection
request.open('GET', 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=45', true);

request.onload = function() {
    // Access JSON here
    var data = JSON.parse(this.response)


    if(request.status >= 200 && request.status < 400) {
        // Get 10 characters with name
        var q = 10;
        var s= 0;

        for(i = 0; i < q; i++) {
            if(data[i].name === "" || data[i].gender === "" || data[i].born === "" || data[i].name === data[i+1].name) {
                q++;
            } else {
                // Data we need: name, gender, titles(loop), aliases(loop), check allegiances, can check mother/father,
                var name = document.createTextNode(data[i].name);

                // Appends
                cards[s].appendChild(name);
    
                cards[s].setAttribute("data-name", data[i].name);
                cards[s].setAttribute("data-title", data[i].aliases[0]);
                cards[s].setAttribute("data-gender", data[i].gender);
                cards[s].setAttribute("data-born", data[i].born);
                s++;
                
            }
        } 
    } else {
        console.log("API Error: 37");
    }
}



// Send request
request.send();

function startGame() {
    window.sessionStorage.setItem("PlayerOne", playerOne);
    window.sessionStorage.setItem("PlayerTwo", playerTwo);

    window.location.href = "game.html";
}