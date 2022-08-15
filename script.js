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
                    console.log("Computer chose rock...");
                    return "draw"

                
            case "paper":
                    console.log("Computer chose paper...");
                    return "lost"


            case "scissors":
                    console.log('Computer chose scissors');
                    return "win"
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                    console.log("Computer chose rock...");
                    return "win"
                
            case "paper":
                    console.log("Computer chose paper...");
                    return "draw"

            case "scissors":
                    console.log('Computer chose scissors');
                    return "lost"
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                    console.log("Computer chose rock...");
                    return "lost"
                
            case "paper":
                    console.log("Computer chose paper...");
                    return  "win"

            case "scissors":
                    console.log('Computer chose scissors');
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
                        console.log("Player win count: " + playerResult);
                        break;

                    case "lost":
                        computerResult++
                        console.log("Computer win count: " + computerResult);
                        break;

                    case "draw":
                        drawResult++
                        console.log("Draw count: " + drawResult);
                        break;
            
                }
        }

    }
    game()
