
  

 /* Variables DOM */
 const result = document.getElementById("result");
 const buttons = document.querySelectorAll(".btn");
 const winner = document.getElementById("winner");
 const wrapper = document.querySelector(".wrapper");
 const restart = document.querySelector(".restart");
 const items = document.querySelectorAll(".game_item");
 const youMove = document.getElementById("you_img");
 const machMove = document.getElementById("machine_img")

 //Counts real and machine player and total rounds.
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
    return "Tie"
  }
  
}

const computerMovement = computerPlay();

 buttons.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const classChecker = e.currentTarget.classList;
    if(classChecker.contains("paper")){
      result.textContent= round("Paper", computerMovement)
    }else if(classChecker.contains("rock")){
      result.textContent= round("Rock", computerMovement)
    }else if(classChecker.contains("scissors")){
      result.textContent= round("Scissors", computerMovement)
    }
    c++;
    if(c===5){
      gameOver();
    }
    movementOption(classChecker, computerMovement)
    score();
  })
 })
 
 //Function to change selected movement image.

 function movementOption(a,b){
  if(a.contains("paper")){
    youMove.src="/Assets/paper.png";
  }
  if(a.contains("rock")){
    youMove.src="/Assets/rock.png";
  }
  if(a.contains("scissors")){
    youMove.src="/Assets/scissors.png";
  }
  if(b == "Paper"){
    machMove.src="/Assets/paper.png";
  }
  if(b == "Rock"){
    machMove.src="/Assets/rock.png";
  }
  if(b == "Scissors"){
    machMove.src="/Assets/scissors.png";
  }
 }

//show score
 function score(){
  document.getElementById("you").textContent= countPlayer;
  document.getElementById("machine").textContent = countMachine;
}


 
//Game over
function gameOver(){
  restart.style.display = "flex";
  items.forEach(function(game_item){
    game_item.style.display = "none";
  });
  buttons.forEach(function(btn){
    btn.style.display = "none";
  });
  result.style.display = "none";
  if(countMachine > countPlayer){
    winner.textContent = "Machine Wins";
  }else if (countMachine < countPlayer){
    winner.textContent = "Player Wins";
  }else{
    winner.textContent = "It's a tie!";
  }

}

 
