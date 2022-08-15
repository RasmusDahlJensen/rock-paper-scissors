function getComputerChoice() {
max = 9
min = 1
choice = Math.floor(Math.random() * (max - min + 1 ) + min )
if (choice <= 3) {
    return "rock"

} else if (choice >= 7  ) {
    return "paper"

} else {
    return "scissors"
}

}




function playRound() {
    const playerSelection = prompt("Pease enter rock - paper - scissors").toLocaleLowerCase()
    const computerSelection = getComputerChoice()

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                    console.log("You chose rock...");
                    console.log("The computer also chose rock...");
                    return "draw"

                
            case "paper":
                    console.log("You chose rock...");
                    console.log("The computer chose paper...");
                    return "lost"


            case "scissors":
                    console.log("You chose rock...");
                    console.log('The computer chose scissors');
                    return "win"
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                    console.log("You chose paper...");
                    console.log("The computer chose rock...");
                    return "win"
                
            case "paper":
                    console.log("You chose paper...");
                    console.log("The computer also chose paper...");
                    return "draw"

            case "scissors":
                    console.log("You chose paper...");
                    console.log('The computer chose scissors');
                    return "lost"
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                    console.log("You chose scissors...");
                    console.log("The computer chose rock...");
                    return "lost"
                
            case "paper":
                    console.log("You chose scissors...");
                    console.log("The computer chose paper...");
                    return  "win"

            case "scissors":
                    console.log("You chose scissors...");
                    console.log("The computer also chose scissors...");
                    return "draw"
        }
    }
                
    }



    function game() {
        let playerResult = 0
        let computerResult = 0
        let drawResult = 0

        for(let i = 0; i < 5; i++){

                switch (playRound()) {
                    case "win":
                        playerResult++
                        console.log("You win!!!");
                        console.log("Player win count: " + playerResult);
                        break;

                    case "lost":
                        computerResult++
                        console.log("You lost...");
                        console.log("Computer win count: " + computerResult);
                        break;

                    case "draw":
                        drawResult++
                        console.log("It's a draw.");
                        console.log("Draw count: " + drawResult);
                        break;
            
                }
                if (i == 4) {
                    console.clear()
                    console.log("You won " + playerResult + " times");
                    console.log("The computer won " + computerResult + " times");
                    console.log("You drew "+ drawResult + " times");
    
                    if (playerResult>computerResult) {
                        console.log("Congratulations you win the game!!");
                    } else if (computerResult>playerResult) {
                        console.log("You fucking lost m8");
                    } else{
                        console.log("It's a draw.");
                    }
                }


        }



    }
    game()
