const scoreboard = document.querySelectorAll('.score');
const display = document.querySelector('#display');
const winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');
let playersScore = 0;
let computersScore = 0;

function GetComputerChoice()
{
    let a = Math.random()*3;
    if(a<1)
    {
        return "rock";
    }
    else if(a<2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function Result(userChoice, computersChoice)
{
    userChoice = userChoice.toLowerCase();
    if(userChoice==computersChoice)
    {
        return "Tie";
    }
    else if((userChoice=="rock" && computersChoice=="scissors")||(userChoice=="scissors" && computersChoice=="paper")||(userChoice=="paper" && computersChoice=="rock"))
    {
        playersScore++;
        return "You win! " + userChoice + " beats " + computersChoice + "\n";
    }
    else
    {
        computersScore++;
        return "You lose! " + computersChoice + " beats " + userChoice + "\n";
    }
}

function Game(s,t)
{    
    if(Math.max(playersScore, computersScore)<5)
    {
    display.textContent = Result(s,t);
    scoreboard[0].textContent = "Player's score: " + playersScore;
    scoreboard[1].textContent = "Computer's score: " + computersScore;
    if(playersScore==5)
    {
        winner.textContent = "PLAYER WINS!";
    }
    if(computersScore==5)
    {
        winner.textContent = "COMPUTER WINS!";
    }
    }
}

buttons[0].addEventListener("click", () => {Game('rock', GetComputerChoice())});
buttons[1].addEventListener("click", () => {Game('paper', GetComputerChoice())});
buttons[2].addEventListener("click", () => {Game('scissors', GetComputerChoice())});