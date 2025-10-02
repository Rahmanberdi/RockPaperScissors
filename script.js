
//get buttons node list
const buttons = document.querySelectorAll('button');
//add event listener to play round when each button is clicked
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        playRound(button.id,getComputerChoice());
    });
});

//create html elements to output after button is clicked, i created here so they wont stack with old ones
let humanScore = 0;
let computerScore = 0;
const body = document.querySelector('body');
const score = document.createElement("h2");
const finalText = document.createElement("h1");
const choices = document.createElement("p");
const result = document.createElement("p");

//gets computer choice
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
//main function with play logic
function playRound(humanChoice,computerChoice){
    // change html elements inner text to show what was humans choice and computers choice
    choices.innerText = "Your choice is " + humanChoice + ", and computers choice is " + computerChoice;

    // checks who won then makes text to print and adds scores
    const winMap = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice === computerChoice){result.innerText = 'Friendship Wins';}

    else if(winMap[humanChoice] === computerChoice){
        humanScore++;
        result.innerText = "Winner winner chicken dinner. Congrats!";
    }else {
        computerScore++;
        result.innerText = 'Loser cant beat a mere calculator :))';
    }

    //text for score
    score.innerText = "Human | " + humanScore + " : " + computerScore + "| Computer";
    //append all the html elements we created before
    body.appendChild(score);
    body.appendChild(choices);
    body.appendChild(result);
    // checks if someone won 5 rounds(5 rounds won equals ultimate winner)
    if (humanScore === 5){
        finalText.innerText = "Winner winner chicken dinner. Congrats!";
        body.appendChild(finalText);
    }else if(computerScore === 5){
        finalText.innerText = "Congrats! You lost what a disappointment";
        body.appendChild(finalText);
    }
}






