class Game {
    constructor(points = 21) {
        this.points = points;
    }

        PlayerTake(number) {
            this.points -=number;
            Scoreupdate()        
        }

}

let Game1 = new Game();

class Player{
    constructor(name, playerID){
        this.name = name;
        this.playerID = playerID;
    }

    createPlayers() {

    }
}

let Player1 = new Player(document.getElementById('player1Name'))
let Player2 = new Player(document.getElementById('player2Name'))


function setPlayerName(){        
    let player1Name = document.getElementById('player1Name');
    let player2Name = document.getElementById('player2Name');
  
    document.getElementById('player1NameLabel').innerHTML = player1Name.value;
    document.getElementById('player2NameLabel').innerHTML = player2Name.value;

    Player1.name = player1Name.value;
    Player2.name = player2Name.value;
}

function Scoreupdate(){
     document.getElementById("gamePoints").innerHTML = Game1.points;
}
