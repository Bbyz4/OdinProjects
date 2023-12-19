const canvas = document.querySelector('#canvas');
const newgrid = document.querySelector('#newgrid');

let isMouseDown = false;
document.addEventListener('mousedown', () => {isMouseDown=true});
document.addEventListener('mouseup', () => {isMouseDown=false});


function ChangeColour(elem, wasClicked)
{
    if(wasClicked || isMouseDown)
    {
        elem.style.backgroundColor = "black";
    }
}

function NewBoard(q)
{  
    let removed = document.querySelectorAll('.pixel');
    removed.forEach((element) => {element.remove();});
    let gridSize = 16;
    if(!q)
    {
        gridSize = parseInt(prompt("What grid size do you want?"));
    }
    if(gridSize>100)
    {
        gridSize=100;
    }
    let pixelSize = 480/gridSize;
    for(let i=0; i<gridSize; i++)
    {
        for(let j=0; j<gridSize; j++)
        {
        const div = document.createElement('div');
        div.classList.add("pixel");
        div.style.width = pixelSize + "px";
        div.style.height = pixelSize + "px";
        div.addEventListener('mousemove', () => ChangeColour(div, false));
        div.addEventListener('mousedown', () => ChangeColour(div, true));
        canvas.append(div);
        }
    }
}
//newgrid.addEventListener('click', () => NewBoard(false));

NewBoard(true);