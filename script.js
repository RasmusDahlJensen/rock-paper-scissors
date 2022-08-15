function getComputerChoice() {
    
choice = Math.floor(Math.random() * 10) + 1;

if (choice <= 3) {
    console.log("Rock");
} else if (choice >= 8) {
    console.log("Paper");
} else {
    console.log("Scissors");
}

}
getComputerChoice()
