const canvas = document.querySelector('#canvas');
const newgrid = document.querySelector('#newgrid');
const oneColorButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
let isMouseDown = false;
let oneColorMode = false;
document.addEventListener('mousedown', () => {isMouseDown=true});
document.addEventListener('mouseup', () => {isMouseDown=false});


function ChangeColour(elem, wasClicked)
{
    if(wasClicked || isMouseDown)
    {
        if(oneColorMode)
        {
            elem.style.backgroundColor = "black";
        }
        else
        {
            elem.style.backgroundColor = "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")";
        }
    }
}

function ChangeMode(one)
{
    if(one && !oneColorMode)
    {
        oneColorMode = true;
        oneColorButton.style.backgroundColor = "lightgreen";
        rainbowButton.style.backgroundColor = "white";
    }
    if(!one && oneColorMode)
    {
        oneColorMode = false;
        oneColorButton.style.backgroundColor = "white";
        rainbowButton.style.backgroundColor = "lightgreen";
    }
}


function NewBoard(q)
{  
    let removed = document.querySelectorAll('.pixel');
    removed.forEach((element) => {element.remove();});
    let gridSize = 16;
    if(!q)
    {
        do
        {
        gridSize = parseInt(prompt("What grid size do you want?", 16));
        }while(!Number.isInteger(gridSize));
    }
    if(gridSize>100)
    {
        gridSize=100;
    }
    if(gridSize<1)
    {
        gridSize=1;
    }
    let pixelSize = 550/gridSize;
    for(let i=0; i<gridSize; i++)
    {
        for(let j=0; j<gridSize; j++)
        {
        const div = document.createElement('div');
        div.classList.add("pixel");
        div.style.width = pixelSize + "px";
        div.style.height = pixelSize + "px";
        div.addEventListener('mouseenter', () => ChangeColour(div, false));
        div.addEventListener('mousedown', () => ChangeColour(div, true));
        canvas.append(div);
        }
    }
}

NewBoard(true);
ChangeMode(true);