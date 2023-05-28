function getComputerChoice(){
    let ranNumber=Math.floor(Math.random()* 10);
    let choice;
    if (ranNumber<=3) choice="Rock";
    else if(ranNumber>3 & ranNumber<=6) choice="Paper";
    else choice="Scissor";
    return choice;
}