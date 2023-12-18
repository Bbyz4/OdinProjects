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
        return "You win! " + userChoice + " beats " + computersChoice + "\n";
    }
    else
    {
        return "You lose! " + computersChoice + " beats " + userChoice + "\n";
    }
}

function Game()
{
    let z = parseInt(prompt("How many rounds do you want to play?"));
    for(var i=0; i<z; i++)
    {
        let s = prompt("Rock, paper or scissors?");
        let t = GetComputerChoice();
        console.log(Result(s, t));
    }
}

Game();