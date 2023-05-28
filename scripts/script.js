
function playRound(playerChoice,computerChoice){
    let winner,loser;
    let rock="ROCK";
    let paper="PAPER";
    let scissor="SCISSOR";
    playerChoice=playerChoice.toUpperCase();
    computerChoice=computerChoice.toUpperCase();
    if(playerChoice==computerChoice){
        return;
    }
    else if(playerChoice==rock){
        if(computerChoice==scissor){
            winner=rock;
            loser=scissor;
        }
        else{
            winner=paper;
            loser=rock;
        }
    }
    else if(playerChoice==scissor){
        if(computerChoice==rock){
            winner=rock;
            loser=scissor;
        }
        else{
            winner=scissor;
            loser=paper;
        }
    }
    else{
        if(computerChoice==rock){
            winner=paper;
            loser=rock;
        }
        else{
            winner=scissor;
            loser=paper;
        }
    }
    return winner;

}

function getComputerChoice(){
    let ranNumber=Math.floor(Math.random()* 10);
    let choice;
    if (ranNumber<=3) choice="Rock";
    else if(ranNumber>3 & ranNumber<=6) choice="Paper";
    else choice="Scissor";
    return choice;
}
function printWinner(){
const playerChoice="paper".toUpperCase();
const computerChoice=getComputerChoice().toUpperCase();
console.log(`Player Choice - ${playerChoice}\nComputer Coice - ${computerChoice}`);
let winner=playRound(playerChoice,computerChoice);
    if(winner==playerChoice){
        console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
    }
    else if(winner==computerChoice){
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`);
    }
    else{
        console.log("No one is a Winner");
    }
}
printWinner();