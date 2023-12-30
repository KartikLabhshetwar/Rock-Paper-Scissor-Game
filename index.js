const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const output = playRound(button.id, computerPlay());
        result.innerHTML = output;
    });
});

function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
     if(playerSelection === computerSelection){
        return "It's a tie!";
     }

     else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
     ){
        playerScore++;
        userScore.textContent = playerScore;
        //in this if you win player data is displayed first and then computer data
        return "You win! " + playerSelection + " beats " + computerSelection;
     }
     
     else {
        computerScore++;
        compScore.textContent = computerScore;
        //in this if you lose computer data is displayed first and then player data
        return "You lose! " + computerSelection + " beats " + playerSelection;
     }
     
}

