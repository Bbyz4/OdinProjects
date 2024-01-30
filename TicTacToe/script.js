const tiles = Array.from(document.querySelectorAll('.tile'));
const newGameButton = document.querySelector('button');
const score = document.querySelector('h2');

function GameManager ()
{
    let circlesTurn = true;
    let gameOver = false;
    let moveCount = 0;

    let CheckIfOver = (x) =>
    {
        console.log(x);
        let y = Math.floor(x/3) * 3;
        let z = x%3;
        if((tiles[y].textContent == tiles[y + 1].textContent) && (tiles[y].textContent == tiles[y + 2].textContent) && (tiles[y + 1].textContent == tiles[y + 2].textContent)) gameOver = true;
        if((tiles[z].textContent == tiles[z + 3].textContent) && (tiles[z].textContent == tiles[z + 6].textContent) && (tiles[z + 3].textContent == tiles[z + 6].textContent)) gameOver = true;
        if([0,4,8].includes(x) && ((tiles[0].textContent == tiles[4].textContent) && (tiles[0].textContent == tiles[8].textContent) && (tiles[4].textContent == tiles[8].textContent))) gameOver = true;
        if([2,4,6].includes(x) && ((tiles[2].textContent == tiles[4].textContent) && (tiles[2].textContent == tiles[6].textContent) && (tiles[4].textContent == tiles[6].textContent))) gameOver = true;

        if(gameOver)
        {
            score.textContent = "Game Over, " + (circlesTurn ? "X" : "O") + " won!";
            return;
        }

        if(moveCount==9)
        {
            gameOver = true;
            score.textContent = "It's a tie!";
        }
    }

    const PlaceSymbol = (tile) =>
    {
        if(!gameOver && tile.textContent == "")
        {
            tile.textContent = circlesTurn ? "O" : "X";
            tile.classList.add(circlesTurn ? "circle" : "cross");
            score.textContent = circlesTurn ? "X to move" : "O to move";
            circlesTurn = !circlesTurn;
            moveCount++;
            CheckIfOver(tiles.indexOf(tile));
        }
    };

    const Restart = () =>
    {
        tiles.forEach((tile) => 
        {
            tile.textContent = "";
            tile.classList.remove("circle", "cross");
        });
        circlesTurn = true;
        gameOver = false;
        moveCount = 0;
        score.textContent = "O to move";
    }

    return {PlaceSymbol, Restart};
}

const manager = GameManager();
tiles.forEach((tile) => 
{
    tile.addEventListener('click', () => {manager.PlaceSymbol(tile)});
});
newGameButton.addEventListener('click', () => {manager.Restart()});