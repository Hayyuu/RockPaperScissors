
function playRound(playerChoice,computerChoice){
    let winner,loser;
    let rock="ROCK";
    let paper="PAPER";
    let scissor="SCISSOR";
    playerChoice=playerChoice.toUpperCase();
    computerChoice=computerChoice.toUpperCase();
    if(playerChoice==computerChoice){
        winner="No winner";
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
const playerChoice="paper";
const computerChoice=getComputerChoice();
console.log(`${playerChoice} , ${computerChoice}`);
console.log(playRound(playerChoice,computerChoice));