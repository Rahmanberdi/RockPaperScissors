function getComputerChoice(){
    randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0){
        return "rock";
    }else if(randomNum === 1){
        return "paper";
    }else if(randomNum === 2){
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper Scissors|What is your choice?");
    choice = choice.toLowerCase();
    return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    console.log("Your choice is " + humanChoice + ", and computers choice is " + computerChoice);
    if (humanChoice === computerChoice){
        console.log("Friendship wins");
    }
    else{
        if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                computerScore += 1;
                console.log("Loser cant beat a mere calculator :))");

            }else{
                humanScore += 1;
                console.log("Winner winner chicken dinner. Congrats!");
            }
        }else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                computerScore += 1;
                console.log("Loser cant beat a mere calculator :))");
            }else{
                humanScore += 1;
                console.log("Winner winner chicken dinner. Congrats!");
            }
        }else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                computerScore += 1;
                console.log("Loser cant beat a mere calculator :))");
            }else{
                humanScore += 1;
                console.log("Winner winner chicken dinner. Congrats!");
            }
        }
    }
}

function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
}

for (let i = 0; i < 5; i++){
    playGame();
}

if (humanScore > 2){
    alert("You won against computer my friend");
}else if (humanScore < 2){
    alert("You lost against computer my friend");
}else{
    alert('Friendship wins');
}

