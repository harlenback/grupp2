
class Game {
    constructor(points){
        this.points = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I"];
    }
    StartGame(){
        Player1.turn = true;
        this.points = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I"];
        victorychecker()
        Scoreupdate()
        turnsUpdate()
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
    constructor(name,turn){
        this.name;
        this.turn;
    }
   


}


let Game1 = new Game;
let Player1 = new Player;
let Player2 = new Player;



function turnswitcherP1(){
    Player2.turn = true;
    Player1.turn = false;
    turnsUpdate()
}
function turnswitcherP2(){
    Player1.turn = true;
    Player2.turn = false;
    turnsUpdate()
}



function Scoreupdate(){
    let P_points = document.getElementById("player_points");
    P_points.innerHTML = Game1.points.join(" ");
}


function setPlayerName(){        
    let player1Name = document.getElementById('player1_name');
    let player2Name = document.getElementById('player2_name');
  
    document.getElementById('player1_nameLabel').innerHTML = player1Name.value;
    document.getElementById('player2_nameLabel').innerHTML = player2Name.value;

    Player1.name = player1Name.value;
    Player2.name = player2Name.value;
}   



function turnsUpdate(){

    if(Player1.turn === true){
     document.getElementById("player2_button1",).disabled = true;
     document.getElementById("player2_button2",).disabled = true;
     document.getElementById("player2_button3",).disabled = true;
     document.getElementById("player1_button1",).disabled = false;
     document.getElementById("player1_button2",).disabled = false;
     document.getElementById("player1_button3",).disabled = false;

    }
    else if(Player2.turn === true){
        document.getElementById("player1_button1",).disabled = true;
        document.getElementById("player1_button2",).disabled = true;
        document.getElementById("player1_button3",).disabled = true;
        document.getElementById("player2_button1",).disabled = false;
        document.getElementById("player2_button2",).disabled = false;
        document.getElementById("player2_button3",).disabled = false;
    }


    
}

function victorychecker(){
    let i = 0;
    for(point of Game1.points){
        i++
    }
    document.getElementById("sticks_left").innerHTML = i;
    if(i === 0 && Player1.turn === true){
        alert( Player1.name + " vann!")
    }
    else if(i === 0 && Player2.turn === true){
        alert(Player2.name + " vann!")
    }
}



