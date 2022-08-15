function getComputerChoice() {
max = 9
min = 1
choice = Math.floor(Math.random() * (max - min + 1 ) + min )
if (choice <= 3) {
    // console.log("Rock");
    return "rock"
} else if (choice >= 7  ) {
    // console.log("Paper");
    return "paper"
} else {
    // console.log("Scissors");
    return "scissors"
}

}




function playRound() {
    const playerSelection = prompt("Pease enter rock - paper - scissors").toLocaleLowerCase()
    const computerSelection = getComputerChoice()

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                    console.log("Computer chose rock...");
                    // setTimeout(() => console.log("It's a draw."), 1000);
                    return "draw"
                break;
                
            case "paper":
                    console.log("Computer chose paper...");
                    // setTimeout(() => console.log("You lost..."), 1000);
                    return "lost"
                break;

            case "scissors":
                    console.log('Computer chose scissors');
                    // setTimeout(() => console.log("You win!!!"), 1000);
                    return "win"
                break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                    console.log("Computer chose rock...");
                    // setTimeout(() => console.log("You win!!!"), 1000);
                    return "win"
                
            case "paper":
                    console.log("Computer chose paper...");
                    // setTimeout(() => console.log("It's a draw."), 1000);
                    return "draw"

            case "scissors":
                    console.log('Computer chose scissors');
                    // setTimeout(() => console.log("You lost..."), 1000);
                    return "lost"
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                    console.log("Computer chose rock...");
                    // setTimeout(() => console.log("You lost..."), 1000);
                    return "lost"
                break;
                
            case "paper":
                    console.log("Computer chose paper...");
                    // setTimeout(() => console.log("You win!!!"), 1000);
                    return "win"
                break;

            case "scissors":
                    console.log('Computer chose scissors');
                    // setTimeout(() => console.log("It's a draw."), 1000);
                    return "draw"
                break;
        }
    }
                
    }

    let playerDefaultResult = 1
    let computerDefaultResult = 1
    let drawDefaultResultResult = 1

    function game() {

        
        for(let i = 0; i < 5; i++){
            console.log(playRound());

                if (playRound() == "win") {
                     playerResult = playerDefaultResult++;
                     console.log(playerResult);
                }
        }

    }
    game()
