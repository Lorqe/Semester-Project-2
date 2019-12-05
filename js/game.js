/***
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

**/


const frame = new Frame({
	scaling:"fit",
	width:1200,
	height:768,
	color:"#000",
	outerColor:darker,
	allowDefault:true // code pen only needs this it seems with keyboard
});
frame.on("ready", ()=>{

    const stage = frame.stage;
    const stageW = frame.width;
    const stageH = frame.height;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // BOARD
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // the Board() class - not to be confused with the LeaderBoard() class ;-)
    // this defaults to isometric but can be used with top view
    // or toggled later with board.isometric = false;

    const board = new Board({
        backgroundColor:grey,
        info:'{"obj":[[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"-","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"r","color":"#000","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"g","color":"#acd241","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"-","color":"#50c4b7","icon":null,"items":[{"zimon":"Tree","args":[]}]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}],[{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]},{"data":"x","color":"#000","icon":null,"items":[]}]],"zimon":1,"info":"https://zimjs.com/zimon/"}', // from info file made using board.record();
        arrows:false, // hide board arrows so can't scroll to see full maze
        indicatorBorderColor:silver
    }).center();
    board.positionBoard(5,5); // start in the middle of the info



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // BOARD ITEMS
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // add a player and key controls
    // provide the keys with the allowed data squares
    const player = new Person(yellow,silver,brown);
    const player2 = new Person(blue,silver,brown);
    var x = 4;
    var y = 7;
    
    board.add(player, x, y); // can only add() to the board (otherwise use board.info)

    
    

    
    var totalPlayerOne = 0;
    
    function movePlayer() {
        var roll = Math.floor( Math.random() * 6 ) +1;
        totalPlayerOne = totalPlayerOne + roll;
        console.log(totalPlayerOne);
        console.log("Roll: " + roll)
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
        } else if (totalPlayerOne < 31) {
            board.add(player, ((totalPlayerOne - 25)), 0);
        } else if (totalPlayerOne >= 30) {
            window.location.href = "congrats.html";
        }
        
    }
    
    var player1Roll = document.getElementById("rollOne");
    player1Roll.addEventListener("click", movePlayer);


    // Create an Orb that is the final maze destiation
    const orb = new Orb({color2:white})
		.alp(0)
		.animate({
			props:{alpha:1},
			time:300,
			wait:200
		});
	board.add(orb, 4, 0);

    
    board.update();


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // TIMER AND SCORER
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // NAVIGATION AT BOTTOM
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const iso = new Button({
        label:"TOP",
        toggle:"ISO",
        corner:0,
        backgroundColor:pink,
        rollBackgroundColor:green,
        shadowBlur:5,
        shadowColor:"rgba(0,0,0,.2)"
    }).loc(465, 703).sca(.5).tap(()=>{
        // toggle the isometric properties
        // watch out for "left" and "right" values 
		// instead of true for timer and scorer (true will give "left")
        board.isometric = !board.isometric;
        timer.isometric = timer.isometric?false:"left";
        scorer.isometric = scorer.isometric?false:"right";
    });

   
    player.moveEvent = player.on("moving", ()=>{
		timeout(50, ()=>{
			if (player.boardTile == orb.boardTile) {
				player.off("moving", player.moveEvent);
				// move orb and particles above player
				let playerIndex = player.parent.getChildIndex(player);
				emitter.parent.setChildIndex(emitter.particles, playerIndex+1);
				orb.parent.setChildIndex(orb, playerIndex+1);
				emitter.spurt(12);
				orb.animate({
					props:{alpha:0},
					wait:300,
					time:300, 
					call:()=>{
						board.remove(orb);
						scorer.score+=timer.time*5;
						timer.stop();
						frame.allowDefault = false; // messing up LeaderBoard with allowDefault true
						timeout(1000, ()=>{
							leaderBoard.center().score(scorer.score);
							leaderBoard.on("close", ()=>{
								zgo("https://zimjs.com/iso/", "_blank");
							});
						});
						stage.update();
					}
				});
			}
		})
        
    });

   	player.on("moved", ()=>{
		scorer.score = scorer.score-1;
	})


    new Label("Game of Thrones - Board Game")
        .sca(.6).alp(.6).loc(20,20,stage,0);
	
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
