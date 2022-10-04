const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.getElementById("results");
const score = document.getElementById("score");
const reset = document.getElementById("reset");
let aannouncementBox = document.getElementById("announcement");
let announcement = document.createElement("h2");
let scoreboard = document.createElement("p");
//Results
let playerResult = 0;
let computerResult = 0;
let drawResult = 0;

//Scores
let playerScore;
let computerScore;
let drawScore;

//Create initial scores at 0

playerScore = document.createElement("p");
playerScore.innerHTML = `Your score is: "${playerResult}"`;

computerScore = document.createElement("p");
computerScore.innerHTML = `Computer score is: "${computerResult}"`;

drawScore = document.createElement("p");
drawScore.innerHTML = `Amount of draws: "${drawResult}"`;

//Buttons to start the game
rock.addEventListener("click", () => {
	results.innerHTML = "";
	playRound(rock.id);
});
paper.addEventListener("click", () => {
	results.innerHTML = "";
	playRound(paper.id);
});
scissors.addEventListener("click", () => {
	results.innerHTML = "";
	playRound(scissors.id);
});

//Making the randomized computer choice
function getComputerChoice() {
	max = 9;
	min = 1;
	choice = Math.floor(Math.random() * (max - min + 1) + min);
	if (choice <= 3) {
		return "rock";
	} else if (choice >= 7) {
		return "paper";
	} else {
		return "scissors";
	}
}

//Round logic
function playRound(playerSelection) {
	const computerSelection = getComputerChoice();

	//player Choice - and then a switch that's based on the random computer choice
	if (playerSelection == "rock") {
		switch (computerSelection) {
			case "rock":
				results.innerHTML = `
                You chose rock...<br>
                The Computer also chose rock...
                `;
				game("draw");
				break;

			case "paper":
				results.innerHTML = `
                You chose rock...<br>
                The Computer chose paper...
                `;
				game("lost");
				break;

			case "scissors":
				results.innerHTML = `
                You chose rock...<br>
                The Computer chose scissors...
                `;
				game("win");
				break;
		}
	} else if (playerSelection == "paper") {
		switch (computerSelection) {
			case "rock":
				results.innerHTML = `
                You chose paper...<br>
                The Computer chose rock...
                `;
				game("win");
				break;

			case "paper":
				results.innerHTML = `
                You chose paper...<br>
                The Computer also chose paper...
                `;
				game("draw");
				break;

			case "scissors":
				results.innerHTML = `
                You chose paper...<br>
                The Computer chose scissors...
                `;
				game("lost");
				break;
		}
	} else if (playerSelection == "scissors") {
		switch (computerSelection) {
			case "rock":
				results.innerHTML = `
                You chose scissors...<br>
                The Computer chose rock...
                `;
				game("lost");
				break;

			case "paper":
				results.innerHTML = `
                You chose scissors...<br>
                The Computer chose paper...
                `;
				game("win");
				break;

			case "scissors":
				results.innerHTML = `
                You chose scissors...<br>
                The Computer also chose scissors...
                `;
				game("draw");
				break;
		}
	}
}

//How results are displayed and counted up with increments
//Scores are also updated each time
function game(result) {
	switch (result) {
		case "win":
			playerResult++;
			let win = document.createElement("p");
			results.appendChild(win).innerHTML = "You win the round!!!";
			playerScore.innerHTML = `Your score is: "${playerResult}"`;

			break;

		case "lost":
			computerResult++;
			let lost = document.createElement("p");
			results.appendChild(lost).innerHTML = "You lost the round...";
			computerScore.innerHTML = `Computer score is: "${computerResult}"`;

			break;

		case "draw":
			drawResult++;
			let draw = document.createElement("p");
			results.appendChild(draw).innerHTML = "You drew the round.";
			drawScore.innerHTML = `Amount of draws: "${drawResult}"`;

			break;
	}
	if (playerResult == 5 || computerResult == 5 || drawResult == 5) {
		let buttons = document.querySelectorAll("button");
		let h1 = document.querySelector("h1");
		let scoreBox = document.getElementById("SRflex");
		buttons.forEach((button) => {
			button.style.display = "none";
		});
		h1.style.display = "none";
		scoreBox.style.display = "none";
		scoreboard.innerHTML = `
        Final results are:<br>
        Player score: ${playerResult}<br>
        Computer score: ${computerResult}<br>
        Draws: ${drawResult}
        `;
		reset.style.display = "block";
	}
	if (playerResult == 5) {
		announcement.innerHTML = "Congratulations you win the game";
	} else if (computerResult == 5) {
		announcement.innerHTML = "Damn, you lost the game";
	} else if (drawResult == 5) {
		announcement.innerHTML = "Unlucky, its a draw";
	}
}

reset.addEventListener("click", () => {
	let buttons = document.querySelectorAll("button");
	let h1 = document.querySelector("h1");
	let scoreBox = document.getElementById("SRflex");
	playerResult = 0;
	computerResult = 0;
	drawResult = 0;
	buttons.forEach((button) => {
		button.style.display = "inline";
	});
	h1.style.display = "block";
	scoreBox.style.display = "flex";
	reset.style.display = "none";
	scoreboard.innerHTML = "";
	announcement.innerHTML = "";
	playerScore.innerHTML = `Your score is: "${playerResult}"`;
	computerScore.innerHTML = `Computer score is: "${computerResult}"`;
	drawScore.innerHTML = `Amount of draws: "${drawResult}"`;
	results.innerHTML = "";
});

score.appendChild(playerScore);
score.appendChild(computerScore);
score.appendChild(drawScore);
aannouncementBox.appendChild(announcement);
aannouncementBox.appendChild(scoreboard);
