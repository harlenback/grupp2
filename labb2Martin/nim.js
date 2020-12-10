class Game {
    constructor(){
    this.player1 = new Player("Spelare 1", 1);
	this.player2 = new Player("Spelare 2", 2);
	this.listOfPlayers = [this.player1, this.player2];
	this.activeId = 1;
	this.playerActiveId = this.listOfPlayers[this.activeId].id;
	this.playerBefore = document.getElementById(`player${this.activePlayerNumber}Name`);
	this.playerNow = document.getElementById(`player${this.playerActiveId}Name`);
	this.setActivePlayer();	
	}
	
	setActivePlayer() {
		this.playerBefore = document.getElementById(`player${this.playerActiveId}Name`);
		this.activeId = (this.activeId + 1) % this.listOfPlayers.length;
		this.playerActiveId = this.listOfPlayers[this.activeId].id;
		this.playerNow = document.getElementById(`player${this.playerActiveId}Name`);
		this.playerBefore.classList.remove("active");
		this.playerNow.classList.add("active");
	}

	winGame() {
		if (sticks.points <= 0) {
			alert(`${this.playerBefore.innerHTML} vinner spelet!`);
			document.getElementById('stick').innerHTML = 0;
		}
	}
}


class Player {
	constructor(name, id) {
		this.name = name;
		this.id = id;
    }
    
	setName() {	
		this.name = document.getElementById(`name${this.id}`).value;
		document.getElementById(`player${this.id}Name`).innerHTML = this.name;
	}
}


class Stick {
	constructor(points) {
        this.points = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I",];
	}

	removeSticks(num) {
		this.points.splice(0, num);
		document.getElementById('stick').innerHTML = sticks.points.join(" ");

		game.winGame();

		game.setActivePlayer();
			if (this.points <= 0) {	
			document.getElementById("take1Button").disabled = true
			document.getElementById("take2Button").disabled = true
			document.getElementById("take3Button").disabled = true
		}
		document.getElementById('pinnepoints').innerHTML = this.points.length;
	}

	setAmountOfSticks() {
		document.getElementById('stick').innerHTML = sticks.points.join(" ");
	}
}


let game = new Game;
let sticks = new Stick
sticks.setAmountOfSticks();


function Scoreupdate(){
    let P_points = document.getElementById("stick");
    P_points.innerHTML = sticks.points.join(" ");
}
Scoreupdate()