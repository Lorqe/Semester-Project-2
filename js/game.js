const frame = new Frame({
	scaling:"tagBoard",
	color:"transparent",
	outerColor:darker
});
frame.on("ready", ()=>{

    const stage = frame.stage;
    const stageW = frame.width;
    const stageH = frame.height;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // BOARD
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const board = new Board({
        info:'{"obj":[[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#ACACAC","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"-","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#ACACAC","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"g","color":"#073428","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"-","color":"#50c4b7","icon":null,"items":[{"zimon":"Tree","args":[]}]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}]],"zimon":1,"info":"https://zimjs.com/zimon/"}',// from info file made using board.record();
        arrows:false, // hide board arrows so can't scroll to see full maze
        rollBackgroundColor: "#ACACAC"
    }).center();
    board.positionBoard(5,5); // start in the middle of the info



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // BOARD ITEMS
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // add a player
    const player = new Person("#340707","#340707","#340707");
    const player2 = new Person("#072234","#072234","#072234");
    var x = 4;
    var y = 7;
    
    
    board.add(player, x, y); // can only add() to the board (otherwise use board.info)
    board.add(player2, x, y);

    // Rolling
    var player1Roll = document.getElementById("rollOne");
    var player2Roll = document.getElementById("rollTwo");

    // Player 1 Controls
    var totalPlayerOne = 0;
    
    function movePlayerOne() {


        var roll = Math.floor( Math.random() * 6 ) +1;
        document.getElementById("diceRoll").style.background = "url('img/dice" +  roll + ".png')" ;
        document.getElementById("diceRoll").style.backgroundSize = "contain";
        

        
        if(roll !== 6) {
            player1Roll.style.display = "none";
            player2Roll.style.display = "block";
            document.getElementById("previousRoll").innerHTML = roll;
            document.getElementById("playerSpan").innerHTML = "ONE";
            document.getElementById("rollDesc").style.display = "block";
            document.getElementById("rollIsSix").style.display = "none";
        } else {
            document.getElementById("previousRoll").innerHTML = roll;
            document.getElementById("playerSpan").innerHTML = "ONE";
            document.getElementById("rollDesc").style.display = "block";
            document.getElementById("rollIsSix").style.display = "block";
        }

        totalPlayerOne = totalPlayerOne + roll;
        
        console.log(totalPlayerOne);
        console.log("Roll: " + roll)

        // TRAPS
        if(totalPlayerOne === 15) {
            board.add(player, 2, 4);
            
            setTimeout(function(){
                alert("Player 1: Deanerys’s Dragons have blocked the road ahead go back three spaces");
                totalPlayerOne = 12;
                board.add(player, 4, 3);
            }, 200);
        } else if(totalPlayerOne === 7) {
            board.add(player, 7, 3);
            
            setTimeout(function(){
                alert("Player 1: You found a dragon egg! You are too scared to touch it, move back one space.");
                totalPlayerOne = 6;
                board.add(player, 7, 4);
            }, 200);
        } else if(totalPlayerOne === 22) {
            board.add(player, 0, 3);
            
            setTimeout(function(){
                alert("Player 1: You've stepped in a bear trap! Move back two spaces.");
                totalPlayerOne = 20;
                board.add(player, 0, 5);
            }, 200);
        } else if (totalPlayerOne === 29) {
            board.add(player, 4, 0);
            
            setTimeout(function(){
                alert("Player 1: Arya jumped in front of you and scared you! Move back four spaces.");
                totalPlayerOne = 25;
                board.add(player, 0, 0);
            }, 200);
        } else if(totalPlayerOne === 3) {
            board.add(player, 7, 7);
            
            setTimeout(function(){
                alert("Player 1: Bran's wheelchair is blocking the road. Go back to start.");
                totalPlayerOne = 0;
                board.add(player, 4, 7);
            }, 200);
        }

        document.getElementById("totalScoreOne").innerHTML = totalPlayerOne;

        if(totalPlayerOne < 4) {
            board.add(player, (x + totalPlayerOne), y);
        } else if (totalPlayerOne < 9) {
            board.add(player, 7, (7 - (totalPlayerOne - 3)));
        } else if (totalPlayerOne < 12) {
            board.add(player, (7 - (totalPlayerOne - 8)), 2);
        } else if (totalPlayerOne < 14) {
            board.add(player, 4, (2 + (totalPlayerOne - 11)));
        } else if (totalPlayerOne < 16) {
            board.add(player, (4 - (totalPlayerOne - 13)), 4);
        } else if (totalPlayerOne < 18) {
            board.add(player, 2, (4 + (totalPlayerOne - 15)));
        } else if (totalPlayerOne < 20) {
            board.add(player, (2 - (totalPlayerOne - 17)), 6);
        } else if (totalPlayerOne < 26) {
            board.add(player, 0, (6 - (totalPlayerOne - 19)));
        } else if (totalPlayerOne < 30) {
            board.add(player, ((totalPlayerOne - 25)), 0);
        } else if (totalPlayerOne > 29) {
            sessionStorage.setItem("winnerName", sessionStorage.getItem("PlayerOne"));
            sessionStorage.setItem("winnerPlayer", "Player One");
            window.location.href = "congrats.html";
        }
        
    }


    // Player Two Controls
    var totalPlayerTwo = 0;
    

    function movePlayerTwo() {
        var roll = Math.floor( Math.random() * 6 ) +1;
        document.getElementById("diceRoll").style.background = "url('img/dice" +  roll + ".png')" ;
        document.getElementById("diceRoll").style.backgroundSize = "contain";
        

        if(roll !== 6) {
            player2Roll.style.display = "none";
            player1Roll.style.display = "block";
            document.getElementById("previousRoll").innerHTML = roll;
            document.getElementById("playerSpan").innerHTML = "TWO";
            document.getElementById("rollDesc").style.display = "block";
            document.getElementById("rollIsSix").style.display = "none";
        } else {
            document.getElementById("previousRoll").innerHTML = roll;
            document.getElementById("playerSpan").innerHTML = "TWO";
            document.getElementById("rollDesc").style.display = "block";
            document.getElementById("rollIsSix").style.display = "block";
        }

        totalPlayerTwo = totalPlayerTwo + roll;
        console.log(totalPlayerTwo);
        console.log("Roll: " + roll)

        if(totalPlayerTwo === 15) {
            board.add(player2, 2, 4);
            
            setTimeout(function(){
                alert("Player 2: Deanerys’s Dragons have blocked the road ahead go back three spaces");
                totalPlayerTwo = 12;
                board.add(player2, 4, 3);
            }, 200);
        } else if(totalPlayerTwo === 7) {
            board.add(player2, 7, 3);
            
            setTimeout(function(){
                alert("Player 2: You found a dragon egg! You are too scared to touch it, move back one space.");
                totalPlayerTwo = 6;
                board.add(player2, 7, 4);
            }, 200);
        } else if(totalPlayerTwo === 22) {
            board.add(player2, 0, 3);
            
            setTimeout(function(){
                alert("Player 2: You've stepped in a bear trap! Move back two spaces.");
                totalPlayerTwo = 20;
                board.add(player2, 0, 5);
            }, 200);
        } else if (totalPlayerTwo === 29) {
            board.add(player2, 4, 0);
            
            setTimeout(function(){
                alert("Player 2: Arya jumped in front of you and scared you! Move back four spaces.");
                totalPlayerTwo = 25;
                board.add(player2, 0, 0);
            }, 200);
        } else if(totalPlayerTwo === 3) {
            board.add(player2, 7, 7);
            
            setTimeout(function(){
                alert("Player 2: Bran's wheelchair is blocking the road. Go back to start.");
                totalPlayerTwo = 0;
                board.add(player2, 4, 7);
            }, 200);
        }

        
        document.getElementById("totalScoreTwo").innerHTML = totalPlayerTwo;

        if(totalPlayerTwo < 4) {
            board.add(player2, (x + totalPlayerTwo), y);
        } else if (totalPlayerTwo < 9) {
            board.add(player2, 7, (7 - (totalPlayerTwo - 3)));
        } else if (totalPlayerTwo < 12) {
            board.add(player2, (7 - (totalPlayerTwo - 8)), 2);
        } else if (totalPlayerTwo < 14) {
            board.add(player2, 4, (2 + (totalPlayerTwo - 11)));
        } else if (totalPlayerTwo < 16) {
            board.add(player2, (4 - (totalPlayerTwo - 13)), 4);
        } else if (totalPlayerTwo < 18) {
            board.add(player2, 2, (4 + (totalPlayerTwo - 15)));
        } else if (totalPlayerTwo < 20) {
            board.add(player2, (2 - (totalPlayerTwo - 17)), 6);
        } else if (totalPlayerTwo < 26) {
            board.add(player2, 0, (6 - (totalPlayerTwo - 19)));
        } else if (totalPlayerTwo < 30) {
            board.add(player2, ((totalPlayerTwo - 25)), 0);
        } else if (totalPlayerTwo > 29) {
            sessionStorage.setItem("winnerName", sessionStorage.getItem("PlayerTwo"));
            sessionStorage.setItem("winnerPlayer", "Player Two");
            window.location.href = "congrats.html";
        }
        
    }
    
    // Call roll functionality
    player1Roll.addEventListener("click", movePlayerOne);
    player2Roll.addEventListener("click", movePlayerTwo);


    // Create an Orb that is the final maze destiation
    const orb = new Orb({color2:white})
		.alp(0)
		.animate({
			props:{alpha:1},
			time:300,
			wait:200
		});
	board.add(orb, 5, 0);

    
    board.update();
    
	
	// DOCS FOR ITEMS USED
	// https://zimjs.com/docs.html?item=Frame
	// https://zimjs.com/docs.html?item=Board
	// https://zimjs.com/docs.html?item=Person
	// https://zimjs.com/docs.html?item=Orb
	// https://zimjs.com/docs.html?item=Tree
	// https://zimjs.com/docs.html?item=Timer
	// https://zimjs.com/docs.html?item=Scorer
	// https://zimjs.com/docs.html?item=LeaderBoard
	// https://zimjs.com/docs.html?item=Circle
	// https://zimjs.com/docs.html?item=Rectangle
	// https://zimjs.com/docs.html?item=Triangle
	// https://zimjs.com/docs.html?item=Label
	// https://zimjs.com/docs.html?item=Button
	// https://zimjs.com/docs.html?item=tap
	// https://zimjs.com/docs.html?item=animate
	// https://zimjs.com/docs.html?item=loop
	// https://zimjs.com/docs.html?item=loc
	// https://zimjs.com/docs.html?item=alp
	// https://zimjs.com/docs.html?item=sca
	// https://zimjs.com/docs.html?item=center
	// https://zimjs.com/docs.html?item=place
	// https://zimjs.com/docs.html?item=Emitter
	// https://zimjs.com/docs.html?item=rand
	// https://zimjs.com/docs.html?item=timeout
	// https://zimjs.com/docs.html?item=zog
	// https://zimjs.com/docs.html?item=Ticker
  
    // FOOTER
    // call remote script to make ZIM Foundation for Creative Coding icon
    createIcon(frame); 

    stage.update(); // this is needed to show any changes
	
}); // end ready
