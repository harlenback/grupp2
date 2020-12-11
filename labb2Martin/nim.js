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
			document.getElementById('pinnepoints').innerHTML = 0;

			// highscore
			game.listOfPlayers[game.activeId].points += 2;
			console.log(game.listOfPlayers[game.activeId].points);
			document.getElementById(`name${this.playerActiveId}HighscorePoints`).innerHTML = game.listOfPlayers[game.activeId].points;
			document.getElementById(`name${this.playerActiveId}HighscoreName`).innerHTML = game.listOfPlayers[game.activeId].name;

		}
	}
	StartGame(){
		sticks.points = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I",];
		console.log(sticks.points);
		document.getElementById("take1Button").disabled = false
		document.getElementById("take2Button").disabled = false
		document.getElementById("take3Button").disabled = false

		document.getElementById(`name1HighscoreName`).innerHTML = game.listOfPlayers[0].name;
		document.getElementById(`name2HighscoreName`).innerHTML = game.listOfPlayers[1].name;

		sticks.setAmountOfSticks()
	}
}


class Player {
	constructor(name, id, points = 0) {
		this.name = name;
		this.id = id;
		this.points = points;
    }
    
	setName() {	
		this.name = document.getElementById(`name${this.id}`).value;
		document.getElementById(`player${this.id}Name`).innerHTML = this.name;
		document.getElementById(`name1HighscoreName`).innerHTML = game.listOfPlayers[0].name;
		document.getElementById(`name2HighscoreName`).innerHTML = game.listOfPlayers[1].name;
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
		document.getElementById('pinnepoints').innerHTML = this.points.length;
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