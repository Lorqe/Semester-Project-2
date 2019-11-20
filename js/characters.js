// Create a request varialbe
var request = new XMLHttpRequest();
var cards = document.querySelectorAll(".card-inner");

// Open connection
request.open('GET', 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=25', true);

request.onload = function() {
    // Access JSON here
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400) {
        // Get 10 characters with name
        var q = 10;
        var s= 0;
        for(i = 0; i < q; i++) {
            if(data[i].name === "") {
                q++;
            } else {
                // Data we need: name, gender, titles(loop), aliases(loop), check allegiances, can check mother/father,
                var name = document.createElement("h2");
                name.innerHTML = data[i].name;
                name.classList.add("char-name");

                var title = document.createElement("h3");
                title.innerHTML = data[i].titles[0];
                title.classList.add("char-title");

                // Button for character select
                var selectBtn = document.createElement("button");
                selectBtn.innerHTML = "Select Character";
                selectBtn.classList.add("selectBtn");
                selectBtn.value = data[i].name;
                var p = 1;
                selectBtn.onclick = function() {
                    
                    if(p === 1) {
                        this.innerHTML = "selected";
                        console.log("Player " + p + " has selected: " + this.value);
                        p++;
                    } else if(p === 2) {
                        this.innerHTML = "selected";
                        console.log("Player " + p + " has selected: " + this.value);
                        p++;
                    } else if (p > 2) {

                    }  
                }

                var birth = document.createElement("span");
                birth.classList.add("birth");
                // Check birth
                if(data[i].born != "") {
                    
                    birth.innerHTML = "Born: " + data[i].born;
                    
                } else {
                    birth.innerHTML = "Born: Unkown";
                }

                // Appends
                cards[s].appendChild(name);
                cards[s].appendChild(title);
                cards[s].appendChild(birth);
                
                cards[s].appendChild(selectBtn);
                cards[s].setAttribute("data-name", data[i].name);
                s++;
                
            }
        } 
    } else {
        console.log("API Error: 37");
    }
}

// Send request
request.send();