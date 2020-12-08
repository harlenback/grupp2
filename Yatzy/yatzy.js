function calcSum() {
    let playerone1 = document.getElementById("playerone_ones");
    let playerone2 = document.getElementById("playerone_twos");
    let playerone3 = document.getElementById("playerone_threes");
    let playerone4 = document.getElementById("playerone_fours");
    let playerone5 = document.getElementById("playerone_fives");
    let playerone6 = document.getElementById("playerone_sixes");
  
    let sum = Number(playerone1.value) + Number(playerone2.value) + Number(playerone3.value) + Number(playerone4.value) + Number(playerone5.value) + Number(playerone6.value);

    document.getElementById("playerone_sum").innerHTML = sum;
    if (sum >= 63) {
      document.getElementById("playerone_bonus").innerHTML = 50;
    }
    else if (sum < 63){
      document.getElementById("playerone_bonus").innerHTML = 0;
    }
}