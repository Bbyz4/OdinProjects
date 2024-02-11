const foods = ["Pizza", "Pasta", "Burger", "Taco", "Fries", "Risotto"];
const descriptions = ["Yes,", "those", "meals", "are", "all", "amazing."];

function LoadMenu()
{
    let card = document.createElement('div');
    card.classList.add('menu');
    let title = document.createElement('h2');
    title.textContent = "Menu";

    let food = document.createElement('div');
    food.classList.add('food');
    foods.forEach((item, index) => 
    {
        let it = document.createElement('div');
        let name = document.createElement('p');
        name.textContent = item;
        let dsc = document.createElement('p');
        dsc.textContent = descriptions[index];
        it.append(name, dsc);
        it.classList.add('fooditem');
        food.append(it);
    })

    card.append(title, food);

    return card;
}

export default LoadMenu;   