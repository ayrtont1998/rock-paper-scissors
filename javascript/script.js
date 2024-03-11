function getComputerChoice() {
    let x = Math.floor((Math.random() * 3)+1);
    if (x == 1){
        return "Rock";
    } else if (x == 2){
        return "Paper";
    } else {
        return "Scissors";
    }

    //Other way:
    // switch(x) {
    // case 1:
    //     console.log("Rock");
    //     break;
    // case 2:
    //     console.log("Paper");
    //     break;
    // default:
    //     console.log("Scissor");
    // }
}
   
    // let x = Math.floor(Math.random() * 3)+1;
    
function capitalize(text){
    return text.at(0).toUpperCase() + text.slice(1).toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(prompt('What is your choice?', ''));
    console.log("You: " + playerSelection)
    computerSelection = getComputerChoice();
    console.log("Computer: " + getComputerChoice())
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")){
        return "You win!";
    }else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Rock" && computerSelection === "Paper")){
        return "You lose!";
    } else {
        return "Tie!";
    }
    // switch (playerSelection, computerSelection){
    //     //Win cases
    //     case ("Rock", "Scissors"):
    //         alert("You win, rock beats scissors!");
    //         break;
    //     case ("Scissors", "Paper"):
    //         alert("You win, scissors beats paper!");
    //         break;
    //     case ("Paper","Rock"):
    //         alert("You win, paper beats rock!");
    //         break;
    //     //Lose case
    //     case ("Scissors", "Rock"):
    //             alert("You lose, rock beats scissors!");
    //             break;
    //     case ("Paper","Scissors"):
    //             alert("You lose, scissors beats paper!");
    //             break;
    //     case ("Rock" , "Paper"):
    //             alert("You lose, paper beats rock!");
    //             break;
    //     //tie
    //     case ("Rock" , "Rock"):
    //         case ("Scissors", "Scissors"):
    //             case ("Paper", "Paper"):
    //         alert("Tie");
    //     break
    // 

   
}

function playGame(){
   for (let i = 0; i <= 5; i++){
    console.log(playRound())
   }
}