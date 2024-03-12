function getComputerChoice() {
    let x = Math.floor((Math.random() * 3)+1);
    // console.log(x);
    if (x === 1){
        return "Rock";
    } else if (x === 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}

// function capitalize(text) {
//    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
// } 

// function playRound(playerSelection, computerSelection){
//     playerSelection = capitalize(prompt("What you choice?", ''));
//     console.log("Your choise: " + playerSelection);
//     computerSelection = getComputerChoice();
//     console.log("Computer choise: " + computerSelection);
//     if (playerSelection === computerSelection) {
//         return "Tie"
//     } else if (playerSelection === "Scissors" && computerSelection === "Paper"
//             || playerSelection === "Rock" && computerSelection === "Scissors"
//             || playerSelection === "Paper" && computerSelection === "Rock"){
//                 return `You win!${playerSelection} beats ${computerSelection}`;
//             }
//         else {
//             return `You lose!${computerSelection} beats ${playerSelection}`;
//         }
// }


// function playGame(){
//     for (i=0; i < 5; i++){
//         console.log(playRound());
// }
// }