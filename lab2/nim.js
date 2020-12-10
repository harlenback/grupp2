class Game {
    constructor(){
    this.player1 = new Player("Spelare 1", 1);
    this.player2 = new Player("Spelare 2", 2);
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
		document.getElementById('stick').innerHTML = sticks.points.join(" ");;
	}

	setAmountOfSticks() {
		document.getElementById('stick').innerHTML = sticks.points.join(" ");;
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