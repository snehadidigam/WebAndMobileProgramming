// Rock Paper Scissors Game

//prompt allows users enter input in a dialog box
alert("Game Time")
var playerChoice = prompt("What is your choice?\n Rock, Paper or Scissors");

if(playerChoice){   // If player enters one of the given choices
    document.write("<p>Player Choice: "+playerChoice+"</p>");
}
//If player doesn't enters one of the given choices
else{
    document.write("<p>You didnt enter anything!!!Refresh page to play again</p>")
}
//Math.random() randomly generates number between 0 and 2 and since it returns a float number, math.floor() rounds off
var computerChoice = Math.floor(Math.random() * (3 - 0) + 0);

//if generated random number is 0 we assign it rock
if (computerChoice == 0){
    computerChocie = "rock";
}
//if generated random number is 1 we assign it paper
else if(computerChoice == 1){
    computerChocie = "Paper";
}
//if generated random number is 2 we assign it scissors
else if(computerChoice == 2){
    computerChocie = "Scissors";
}

document.write("<p>Computer Choice: "+computerChocie+"</p>");

var results = compare(playerChoice,computerChocie); //store result after comparing computer and user choices
alert(results);
document.write("<p> "+results+"</p>");

//function to compare computer and user choices
function compare(playerChoice, computerChoice) {
    if(playerChoice == computerChoice){
        return "Result is a tie"
    }
    else if(playerChoice.toLowerCase() == "rock") {
        if (computerChoice.toLowerCase() == "paper") {
            return "Paper beats Rock. Computer wins. You Lost. Try Again"   //Paper Wins
        }
        else {
            return "Rock beats Scissors. You win"   //Rock Wins
        }
    }
    else if(playerChoice.toLowerCase()=="paper"){
        if(computerChoice.toLowerCase()=="scissors"){
            return "Scissors beats Paper. Computer wins. You Lost. Try Again"   //Scissors Wins

        }
        else{
            return "Paper beats Rock. You win"  //Paper  Wins
        }
    }
    else if(playerChoice.toLowerCase()=="scissors"){
        if(computerChoice.toLowerCase()=="rock"){
            return "Rock beats Scissors. Computer wins. You Lost. Try Again"    //Rock Wins

        }
        else{
            return "Scissors beats Paper. You win"  //Scissors Wins
        }
    }
}