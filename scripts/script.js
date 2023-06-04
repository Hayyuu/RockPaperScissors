
function playRound(e){
    let winner,loser;
    let rock="ROCK";
    let paper="PAPER";
    let scissor="SCISSOR";
    let computerChoice=getComputerChoice().toUpperCase();
    playerChoice=e.target.textContent.toUpperCase();
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
    if(winner==playerChoice){
        return 'playerChoice';
    }
    if(winner==computerChoice){
        return 'computerChoice';
    }

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
    const div1=document.querySelector('div');
    const p2=document.createElement('p');
    div1.textcontent
    if(playerCount>computerCount){
        p2.textContent=`You Won! your score - ${playerCount} computer score ${computerCount}`;
    }
    else if(playerCount<computerCount){
        p2.textContent=`You lost! your score -  ${playerCount} computer score ${computerCount}`;
    }
    else{
        p2.textContent="No one is a Winner";
    }
    div1.appendChild(p2);
}
function game(){
    let playerCount=0;
    let computerCount=0;
    let winner;
    const buttons=Array.from(document.querySelectorAll('.button'));
    buttons.forEach(button => button.addEventListener('click',function(event){
        winner=playRound(event);
        if(winner=='playerChoice'){
            playerCount++;
        }
        if(winner=='computerChoice'){
            computerCount++;
        }
        const div1=document.querySelector('div');
        const p=document.createElement('p');
        p.textContent=`Keep Playing! \nYour Score - ${playerCount}\nComputer Score - ${computerCount}`;
        div1.appendChild(p);
        if(playerCount==5 || computerCount==5){
            printWinner(playerCount,computerCount);
            return;
        }
    }
    
        ));
}
game();