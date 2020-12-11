
class Player{
    constructor(name,points,turn){
        this.name;
        this.points = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I",];
        this.turn;
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



let Player1 = new Player;
let Player2 = new Player;






function Scoreupdate(){
    let P1_points = document.getElementById("player1_points");
    P1_points.innerHTML = Player1.points.join(" ");
    let P2_points = document.getElementById("player2_points");
    P2_points.innerHTML = Player2.points.join(" ");
}
Scoreupdate()


document.addEventListener("DOMContentLoaded", function()
{
    let button = document.getElementById("btnSave");
    let textbox = document.getElementById("Player1_name");

    button.addEventListener("click", function(){
        let Player1_name = textbox.value;

        Player1_name = document.getElementById("test")

    })


})


