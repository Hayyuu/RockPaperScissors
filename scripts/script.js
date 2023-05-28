
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
function printWinner(playerCount,computerCount){
    if(playerCount>computerCount){
        console.log(`You Won! your score - ${playerCount} computer score ${computerCount}`);
    }
    else if(playerCount<computerCount){
        console.log(`You lost! your score -  ${playerCount} computer score ${computerCount}`);
    }
    else{
        console.log("No one is a Winner");
    }
}
function game(){
    let playerCount=0;
    let computerCount=0;
    for(let i=0;i<5;i++){
        const playerChoice=prompt("Enter your choice").toUpperCase();
        const computerChoice=getComputerChoice().toUpperCase();
        const winner = playRound(playerChoice, computerChoice);
        if(winner==playerChoice){
            playerCount++;
        }
        if(winner==computerChoice){
            computerCount++;
        }
}
    printWinner(playerCount,computerCount);
}
game();