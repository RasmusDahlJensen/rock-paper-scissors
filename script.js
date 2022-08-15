function getComputerChoice(min, max) {
    
choice = Math.floor(Math.random() * (max - min + 1) + min)

getComputerChoice(1, 10)
console.log(choice);

}