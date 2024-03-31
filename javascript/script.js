const choice = ["Rock", "Scissors", "Paper"];

function getComputerChoice(){
  return choice[Math.floor(Math.random()*choice.length)];
}

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice?")
    return playerChoice.at(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (playerSelection === computerSelection){
        return "Tie!"
    }else if (playerSelection === "Rock" && computerSelection === "Scissors"||
              playerSelection === "Paper" && computerSelection === "Rock"||
              playerSelection === "Scissors" && computerSelection === "Paper"){
                return `You win, ${playerSelection} beats ${computerSelection}!`;
                }
    else{
        return `You lose: ${computerSelection} beats ${playerSelection}!`;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
        console.log("------------");
    }
    console.log("Game finished!");

 
}
