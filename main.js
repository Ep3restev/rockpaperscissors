
  

 /* Variables DOM */
 const result = document.getElementById("result");
 const buttons = document.querySelectorAll(".btn");
 const winner = document.getElementById("winner");
 const wrapper = document.querySelector(".wrapper");
 const restart = document.querySelector(".restart");

//Contador player y contador máquina.
let countPlayer = 0, countMachine = 0, c = 0;


restart.style.display = "none";



 function computerPlay(){
  let game = ["Rock","Paper","Scissors"];
  return game[Math.floor(Math.random()*3)]
}



function round(playerSelection, computerSelection){
  if(playerSelection === "Rock" && computerSelection === "Paper"){
    countMachine++;
    return "You lose, paper wraps rock."
  }
  if(playerSelection === "Scissors" && computerSelection === "Rock"){
    countMachine++;
    return "You lose, rock blunts scissors."
  }
  if(playerSelection === "Paper" && computerSelection === "Scissors"){
    countMachine++;
    return "You lose, scissors cuts paper."
  }
  if(playerSelection === "Paper" && computerSelection === "Rock"){
    countPlayer++;
    return "You win, paper wraps rock."
  }
  if(playerSelection === "Rock" && computerSelection === "Scissors"){
    countPlayer++;
    return "You win, rock blunts scissors."
  }
  if(playerSelection === "Scissors" && computerSelection === "Paper"){
    countPlayer++;
    return "You win, scissors cuts paper."
  }
  if (playerSelection === computerSelection){
    countPlayer++;
    countMachine++;
    return "Tie"
  }
  
}


 buttons.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const classChecker = e.currentTarget.classList;
    if(classChecker.contains("paper")){
      result.textContent= round("Paper", computerPlay())
    }else if(classChecker.contains("rock")){
      result.textContent= round("Rock", computerPlay())
    }else if(classChecker.contains("scissors")){
      result.textContent= round("Scissors", computerPlay())
    }
    c++;
    if(c===5){
      gameOver();
    }
    gamePuntuation();
  })
 })
 

 //Mostrar puntuacion.
 function gamePuntuation(){
  let table = document.getElementById("puntuacion");
  let r1 = table.insertRow(0);
  let c1 = r1.insertCell(0);
  let c2 = r1.insertCell(1);
  c1.innerHTML = countPlayer;
  c2.innerHTML = countMachine; 
 
}


 
//Fin de juego.
function gameOver(){
  restart.style.display = "flex";

  buttons.forEach(function(btn){
    btn.style.display = "none";
  })
  result.style.display = "none";
  if(countMachine > countPlayer){
    winner.textContent = "Machine Wins";
  }else if (countMachine < countPlayer){
    winner.textContent = "Player Wins"
  }else{
    winner.textContent = "It's a tie!"
  }

}

 
