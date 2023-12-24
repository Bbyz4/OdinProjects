const mainDisplay = document.querySelector('#main');
const secondDisplay = document.querySelector('#secondary');

let firstNumber = "0";
let secondNumber = "0";
let dotTypedFirst = false;
let dotTypedSecond = false;
let operation = "";
let typingFirst = true;
let lastOperation = "op";
let showAnswer = false;

function Clear()
{
    firstNumber = "0";
    secondNumber = "0";
    operation = ""; 
    typingFirst = true;
    lastOperation = "op";
    dotTypedFirst = false;
    dotTypedSecond = false;
    showAnswer = false;
    UpdateDisplay();
}

function UpdateDisplay()
{
    if(typingFirst)
    {
        mainDisplay.textContent = firstNumber;
    }
    else
    {
        mainDisplay.textContent = secondNumber;
    }

    if(!showAnswer)
    {
    if(!typingFirst)
    {
        secondDisplay.textContent = firstNumber + " " + operation;
    }
    else
    {
        secondDisplay.textContent = "";
    }
    }
}


function NumberClicked(x)
{
    showAnswer = false;
    if(x==0 && lastOperation!="num" && ((typingFirst && firstNumber=="0")||(!typingFirst && secondNumber=="0")))
    {
        return;
    }
    if(typingFirst)
    {
        if(firstNumber=="0")
        {
            firstNumber="";
        }
        firstNumber += x.toString();
    }
    else
    {
        if(secondNumber=="0")
        {
            secondNumber="";
        }
        secondNumber += x.toString();
    }
    lastOperation = "num";
    UpdateDisplay();
}

function Decimal()
{
    showAnswer = false;
    if(typingFirst)
    {
        if(!dotTypedFirst)
        {
            dotTypedFirst = true;
            firstNumber += '.';
        }
    }
    else
    {
        if(!dotTypedSecond)
        {
            dotTypedSecond = true;
            secondNumber += '.';
        }
    }
    lastOperation = "dec";
    UpdateDisplay();
}

function Answer(a,b,c)
{
    a=parseFloat(a);
    b=parseFloat(b);
    switch(c)
    {
        case '+':
            return Math.round((a+b)*1000)/1000;
        case '-':
            return Math.round((a-b)*1000)/1000;
        case 'X':
            return Math.round(a*b*1000)/1000;
        case '/':
            return Math.round((a/b)*1000)/1000;
        default:
            return 'ERROR';
    }
}

function Operate(c)
{
    if(lastOperation=="num")
    {
    dotTypedSecond = false;
    if(operation=="")
    {
        typingFirst = false;
    }
    else
    {
        if(c=='=')
        {
            secondDisplay.textContent = firstNumber + " " + operation + " " + secondNumber + " =";
            showAnswer = true;
        }
        else
        {
            showAnswer = false;
        }
        firstNumber = Answer(firstNumber, secondNumber, operation).toString();
        secondNumber = "0";
    }
    if(c!='=')
    {
        operation=c;
        lastOperation = "op";
        typingFirst = false;
        showAnswer = false;
    }
    else
    {
        operation="";
        lastOperation = "num";
        typingFirst = true;
    }
    }
    UpdateDisplay();
}

function ChangeSign()
{
    if(typingFirst && firstNumber!="0")
    {
        if(firstNumber[0]!='-')
        {
            firstNumber = "-" + firstNumber;
        }
        else
        {
            firstNumber = firstNumber.substring(1, firstNumber.length);
        }
    }
    
    if(!typingFirst && secondNumber!="0")
    {
        if(secondNumber[0]!='-')
        {
            secondNumber = "-" + secondNumber;
        }
        else
        {
            secondNumber = secondNumber.substring(1, secondNumber.length);
        }
    }
    UpdateDisplay();
}

mainDisplay.textContent = "0";
secondDisplay.textContent = "";