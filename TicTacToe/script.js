const tiles = Array.from(document.querySelectorAll('.tile'));
const newGameButton = document.querySelector('.new');
const resetButton = document.querySelector('.reset');
const state = document.querySelector('h2');
const score = document.querySelector('#scr');

function GameManager ()
{
    let circlesTurn = true;
    let gameOver = false;
    let moveCount = 0;
    let circlePoints = 0;
    let crossPoints = 0;

    let CheckIfOver = (x) =>
    {
        let y = Math.floor(x/3) * 3;
        let z = x%3;
        if((tiles[y].textContent == tiles[y + 1].textContent) && (tiles[y].textContent == tiles[y + 2].textContent) && (tiles[y + 1].textContent == tiles[y + 2].textContent)) gameOver = true;
        if((tiles[z].textContent == tiles[z + 3].textContent) && (tiles[z].textContent == tiles[z + 6].textContent) && (tiles[z + 3].textContent == tiles[z + 6].textContent)) gameOver = true;
        if([0,4,8].includes(x) && ((tiles[0].textContent == tiles[4].textContent) && (tiles[0].textContent == tiles[8].textContent) && (tiles[4].textContent == tiles[8].textContent))) gameOver = true;
        if([2,4,6].includes(x) && ((tiles[2].textContent == tiles[4].textContent) && (tiles[2].textContent == tiles[6].textContent) && (tiles[4].textContent == tiles[6].textContent))) gameOver = true;

        if(gameOver)
        {
            state.textContent = "Game Over, " + (circlesTurn ? "X" : "O") + " won!";
            circlesTurn ? crossPoints++ : circlePoints++;
            ScoreUpdate();
            return;
        }

        if(moveCount==9)
        {
            gameOver = true;
            state.textContent = "It's a tie!";
        }
    }

    let ScoreUpdate = () =>
    {
        score.textContent = circlePoints.toString() + " - " + crossPoints.toString();
    }

    const PlaceSymbol = (tile) =>
    {
        if(!gameOver && tile.textContent == "")
        {
            tile.textContent = circlesTurn ? "O" : "X";
            tile.classList.add(circlesTurn ? "circle" : "cross");
            state.textContent = circlesTurn ? "X to move" : "O to move";
            circlesTurn = !circlesTurn;
            moveCount++;
            CheckIfOver(tiles.indexOf(tile));
        }
    };

    const NewGame = () =>
    {
        tiles.forEach((tile) => 
        {
            tile.textContent = "";
            tile.classList.remove("circle", "cross");
        });
        circlesTurn = true;
        gameOver = false;
        moveCount = 0;
        state.textContent = "O to move";
    }

    const Restart = () =>
    {
        circlePoints = 0;
        crossPoints = 0;
        ScoreUpdate();
    }

    return {PlaceSymbol, NewGame, Restart};
}

const manager = GameManager();
tiles.forEach((tile) => 
{
    tile.addEventListener('click', () => {manager.PlaceSymbol(tile)});
});
newGameButton.addEventListener('click', () => {manager.NewGame()});
resetButton.addEventListener('click', () => {manager.Restart()});