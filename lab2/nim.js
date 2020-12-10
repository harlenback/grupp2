
class Game {
    constructor(points,){
        this.points = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I",];
    }
    PlayerTakeAway1(){
        this.points.splice(0,1)
        Scoreupdate()
        
    }
    PlayerTakeAway2(){
        this.points.splice(0,2)
        Scoreupdate()
    }
   PlayerTakeAway3(){
        this.points.splice(0,3)
         Scoreupdate()
    }
}



class Player{
    constructor(name,points,turn){
        this.name;
        this.turn;
    }
   

}


let Game1 = new Game;
let Player1 = new Player;
let Player2 = new Player;






function Scoreupdate(){
    let P_points = document.getElementById("player_points");
    P_points.innerHTML = Game1.points.join(" ");
}
Scoreupdate()


function setPlayerName(){        
    let player1Name = document.getElementById('player1_name');
    let player2Name = document.getElementById('player2_name');
  
    document.getElementById('player1_nameLabel').innerHTML = player1Name.value;
    document.getElementById('player2_nameLabel').innerHTML = player2Name.value;

    Player1.name = player1Name.value;
    Player2.name = player2Name.value;
}   

console.log(player1Name)


