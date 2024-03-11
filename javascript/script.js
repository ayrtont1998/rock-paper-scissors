function getComputerChoice() {
    let x = Math.floor((Math.random() * 3)+1);
    console.log(x);
    if (x == 1){
        return "Rock";
    } else if (x == 2){
        return "Paper";
    } else {
        return "Scissor";
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